import { motion } from 'framer-motion';

export default function CertificationCard({ title, img, org, date, certificateUrl }) {
  // Function to handle certificate download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificateUrl; // URL for the certificate file
    link.download = `${title}_certificate.pdf`; // Download filename
    link.click();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative w-full bg-white dark:bg-[#1e293b] rounded-xl overflow-hidden shadow-lg group transition-transform duration-300"
    >
      {/* Image with Animated Wave Overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />

        {/* Animated Wave */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
        >
          <motion.path
            d="M0,50 C480,150 960,-50 1440,50 L1440,100 L0,100 Z"
            fill="#facc15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{org}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 italic">{date}</p>

        {/* Buttons */}
        <div className="mt-4 flex space-x-4">
          {/* View Certificate Button */}
          <button
            onClick={() => window.open(certificateUrl, '_blank')}
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            View Certificate
          </button>

          {/* Download Certificate Button */}
          <button
            onClick={handleDownload}
            className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            Download Certificate
          </button>
        </div>
      </div>
    </motion.div>
  );
}
