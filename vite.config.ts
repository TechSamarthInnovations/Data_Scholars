import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Data_Scholars/', // Set your repository name here
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder for built files
  },
});
