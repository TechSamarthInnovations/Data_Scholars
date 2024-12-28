import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Technologies Data
const technologies = [
  { icon: 'logos:mysql', name: 'MySQL', color: '#4479A1' },
  { icon: 'logos:postgresql', name: 'PostgreSQL', color: '#336791' },
  { icon: 'logos:mongodb', name: 'MongoDB', color: '#4DB33D' },
  { icon: 'logos:oracle', name: 'Oracle', color: '#F80000' },
  { icon: 'logos:python', name: 'Python', color: '#306998' },
  { icon: 'logos:linux-tux', name: 'Linux', color: '#FCC624' },
  { icon: 'logos:microsoft-windows-icon', name: 'Windows', color: '#00A4EF' },
  { icon: 'logos:hadoop', name: 'Hadoop', color: '#F7B824' },
  { icon: 'logos:apache-spark', name: 'Spark', color: '#FF9F00' },
  { icon: 'token-branded:hive', name: 'Hive', color: '#E0B61B' },
  { icon: 'logos:kafka', name: 'Kafka', color: '#231F20' },
  { icon: 'logos:aws', name: 'AWS', color: '#FF9900' },
  { icon: 'logos:azure', name: 'Azure', color: '#0089D6' },
  { icon: 'logos:google-cloud', name: 'GCP', color: '#4285F4' },
  { icon: 'logos:snowflake', name: 'Snowflake', color: '#00A9E0' },
  { icon: 'logos:aws-redshift', name: 'Redshift', color: '#CC0033' },
  { icon: 'logos:github', name: 'GitHub', color: '#8B5CF6' },
  { icon: 'logos:git', name: 'Git', color: '#F05032' },
  { icon: 'logos:jenkins', name: 'Jenkins', color: '#D24926' },
  { icon: 'logos:kubernetes', name: 'Kubernetes', color: '#326CE5' },
  { icon: 'logos:docker', name: 'Docker', color: '#2496ED' },
];

const TechnologyFlow = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-wrap justify-center gap-10 py-10"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 150 }}
            className="flex flex-col items-center"
          >
            <div className="p-4 rounded-full bg-white shadow-md">
              <Icon
                icon={tech.icon}
                className="w-16 h-16"
                style={{ color: tech.color }}
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-yellow-600 font-serif">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnologyFlow;
