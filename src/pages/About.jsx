import { useState, useEffect } from 'react';
import tailwindLogo from '../assets/pngwing.png'; // Import Tailwind logo
import pythonLogo from '../assets/pythonLogo.png'; // Import Python logo
import mongodbLogo from '../assets/mongo_db_icon.png'; // Import MongoDB logo
import postmanLogo from '../assets/postman_Logo.png'; // Import Postman logo
import ExcelLogo from '../assets/Excel_Logo.png'; // Import Excel logo
import powerbiLogo from '../assets/powerBi_Logo.png'; // Import Power BI logo
import { motion } from 'framer-motion';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <section 
      className="p-8 max-w-full mx-auto rounded-lg shadow-lg flex flex-col
                bg-gradient-to-br from-blue-600 via-indigo-400 to-purple-700
                dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-900
                transition-colors duration-300 relative"
      id="about"
    >

      {/* About Section */}
      <div className="w-full">
      <h2 className="text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">{" "}
          <span className="text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500">
            About Me
          </span>
        </h2>
        <p className="mb-8 text-lg text-center text-white/90 dark:text-gray-300">
          MCA graduate passionate about full-stack development with expertise in both frontend and backend technologies,
          including React.js, Node.js, Python, JAVA and MySQL. I have a Strong problem-solving skills with a keen interest in
          integrating ML models into web applications. Dedicated to building efficient, user-friendly, and scalable
          solutions that align with modern technological advancements.
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-8" id='skills'>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-purple-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              Technical Skills
        </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-purple-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" className="h-5 w-5" />
                HTML
              </li>
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" className="h-5 w-5" />
                CSS
              </li>
              <li className='flex items-center gap-2'>
                <img src= {tailwindLogo} alt="tailwind" className='h-5 w-5' />
                Tailwind css
              </li>
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" className="h-5 w-5" />
                JavaScript
              </li>
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" className="h-5 w-5" />
                React.js
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-purple-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              Backend & Databases
            </h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
            <li className="flex items-center gap-2">
                <img src= {pythonLogo} alt="Python Flask" className="h-5 w-5" />
                Python Flask
              </li>
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node.js" className="h-5 w-5" />
                Node.js, Express.js
              </li>
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MySQL" className="h-5 w-5" />
                MySQL
              </li>
              <li className="flex items-center gap-2">
                <img src={mongodbLogo} alt="MongoDB" className="h-5 w-5" />
                MongoDB
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-purple-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              Tools & Platforms
            </h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/919/919847.png" alt="Git" className="h-5 w-5" />
                Git, GitHub
              </li>
              <li className="flex items-center gap-2">
                <img src={postmanLogo} alt="Postman" className="h-5 w-5" />
                Postman
              </li>
              <li className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/906/906324.png" alt="VS Code" className="h-5 w-5" />
                VS Code
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-purple-200 border-b pb-2 border-gray-300 dark:border-gray-600">
              Data Analytics & Visualization
            </h3>
            <ul className="space-y-2 text-gray-800 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <img src={powerbiLogo} alt="Power BI" className="h-5 w-5" />
                Power BI
              </li>
              <li className="flex items-center gap-2">
                <img src={ExcelLogo} alt="Excel" className="h-5 w-5" />
                Excel
              </li>
              <li className='flex items-center gap-2'>
                <img src={pythonLogo} alt="python" className='h-5 w-5' />
                python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)
              </li>
            </ul>
          </div>
        </div>

        {/* More About Me Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-purple-200 border-b pb-2 border-gray-300 dark:border-gray-600">
            More About Me
          </h3>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-4">
            <li>Strong problem-solving skills and continuous learning attitude</li>
            <li>Completed multiple certifications in web development and data analytics</li>
            <li>Worked on projects integrating machine learning models with full-stack applications</li>
            <li>Effective team player with good communication and collaboration abilities</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
