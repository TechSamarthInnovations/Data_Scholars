import express from 'express';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

// Initialize Express app
const app = express();
const port = 5000;

// Get the directory name for the current module (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// File path for Excel file
const filePath = path.resolve(__dirname, 'form-data.xlsx');

// Enable CORS to allow requests from your frontend
app.use(cors());

// Middleware to parse incoming JSON
app.use(express.json());

// Email configuration (use your actual email service credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sastedinesh96@gmail.com', // Your email address
    pass: 'xnpz ezrt wwlo ilnz', // Your email password or app-specific password
  },
});

// POST endpoint to save form data
app.post('/save-form', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const currentDate = new Date().toISOString().split('T')[0]; // Format current date as YYYY-MM-DD

  console.log('Form data received:', req.body);

  try {
    // Initialize a workbook
    const workbook = new ExcelJS.Workbook();
    let worksheet;

    if (fs.existsSync(filePath)) {
      // If the file exists, load it and get the first worksheet
      console.log('File exists. Loading existing workbook.');
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet('Form Data');
    } else {
      // If the file does not exist, create a new workbook and worksheet
      console.log('File does not exist. Creating new workbook.');
      worksheet = workbook.addWorksheet('Form Data');

      // Add headers only if creating a new file
      worksheet.addRow(['Date', 'Name', 'Email', 'Phone', 'Message']);
      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
        cell.alignment = { horizontal: 'center' };
      });
    }

    // Add the form data as a new row
    console.log('Adding new row with form data.');
    worksheet.addRow([currentDate, name, email, phone, message]);

    // Save the workbook to a file
    console.log('Saving workbook to file.');
    await workbook.xlsx.writeFile(filePath);
    console.log('Workbook saved successfully.');

    // Prepare email options
    const mailOptions = {
      from: 'sastedinesh96@gmail.com',
      to: 'akkism123456789@gmail.com', // Recipient email address
      subject: 'New Contact Form Submission',
      text: `
Dear,
Please find the attached Excel file containing the form data.
`,
      attachments: [
        {
          filename: 'form-data.xlsx',
          path: filePath,
        },
      ],
    };

    // Send email with attached Excel file
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ message: 'Failed to send email.' });
      }
      console.log('Email sent successfully:', info.response);
      res.status(200).json({ message: 'Form data saved and emailed successfully!' });
    });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ message: 'Failed to process the form submission.', error: error.message });
  }
});

// Test endpoint to check the file path
app.get('/check-file', (req, res) => {
  if (fs.existsSync(filePath)) {
    res.send(`File exists at: ${filePath}`);
  } else {
    res.send(`File does not exist. Path tried: ${filePath}`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
