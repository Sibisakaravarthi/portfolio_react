import CertificationCard from '../components/CertificationCard';
import javaCertificate from '../assets/certifications/Java_certificate.jpg';
import powerbiCert from '../assets/certifications/Data_analysis_coursera.jpg';
import uiuxCert from '../assets/certifications/UI_UX_certificate.jpg';
import DBMSNptelCert from '../assets/certifications/DBMS_certificate_nptel.jpg';
import CProgramingCert from '../assets/certifications/C_certificate.jpg';
import MSMEpythonIntern from '../assets/certifications/MSME_python.jpg';

export default function Certifications() {
  const certificates = [
    {
      title: 'Programming in Advanced C',
      org: 'T4TEQ Software Solutions',
      date: 'January 06, 2023',
      img: CProgramingCert,
      certificateUrl: CProgramingCert, // Add the certificate image path for viewing in modal
    },
    {
      title: 'Programming in Core JAVA',
      org: 'T4TEQ Software Solutions',
      date: 'May 11, 2023',
      img: javaCertificate,
      certificateUrl: javaCertificate, // Add the certificate image path for viewing in modal
    },
    {
      title: 'MSME python internship',
      org: 'MSME',
      date: '11th, 12th, 13th April, 2023',
      img: MSMEpythonIntern,
      certificateUrl: MSMEpythonIntern, // Add the certificate image path for viewing in modal
    },
    {
      title: 'Database Management System',
      org: 'NPTEL (Swayam)',
      date: 'Jul–Sep 2024',
      img: DBMSNptelCert,
      certificateUrl: DBMSNptelCert, // Add the certificate image path for viewing in modal
    },
    {
      title: 'UI/UX Designing for Beginners',
      org: 'Great Learning',
      date: 'June 2024',
      img: uiuxCert,
      certificateUrl: uiuxCert, // Add the certificate image path for viewing in modal
    },
    {
      title: 'Data Analysis with Power BI',
      org: 'Coursera',
      date: 'August 11, 2024',
      img: powerbiCert,
      certificateUrl: powerbiCert, // Add the certificate image path for viewing in modal
    },
    
  ];

  return (
    <section className="p-10 max-w-8xl mx-auto bg-gray-100 dark:bg-gray-900 text-center" id="certifications">
      <h2 className="text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Certifications</span>
          </h2>
      
      {/* Short Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        Explore the certifications I've earned to enhance my skills and knowledge across different domains.
      </p>
      
      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            org={cert.org}
            date={cert.date}
            img={cert.img}
            certificateUrl={cert.certificateUrl} // Pass the certificateUrl to CertificationCard
          />
        ))}
      </div>
    </section>
  );
}
