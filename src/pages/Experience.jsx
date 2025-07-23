import { useState } from "react";

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "", src: "" });

  const openModal = (type, src) => {
    setModalContent({ type, src });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent({ type: "", src: "" });
  };

  const offerLetterSrc = "/sibi_uniq_softech_intern_offer_letter.pdf";
  const completionCertSrc = "/sibi_uniq_softech_intern_completion_certificate.pdf";

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Experience
          </span>
        </h2>

        <div className="relative border-l-4 border-purple-400 dark:border-purple-600">
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-purple-500 rounded-full mt-1.5 -left-2.5 border-4 border-white dark:border-gray-900"></div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full Stack Developer Intern
              </h3>
              <span className="block text-sm text-purple-500 font-semibold mt-1">
                UNIQ SOFTTECH | Jan 2025 - Apr 2025
              </span>
              <ul className="mt-4 list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  Developing dynamic web apps with{" "}
                  <strong>HTML, CSS, JavaScript, React.js</strong> (frontend) and{" "}
                  <strong>PHP, Python Flask</strong> (backend).
                </li>
                <li>
                  Using React Hooks like <strong>useState</strong>,{" "}
                  <strong>useEffect</strong>, and <strong>useContext</strong>.
                </li>
                <li>
                  Managing MySQL DB and optimizing performance.
                </li>
              </ul>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-6 flex-wrap">
                <button
                  onClick={() => openModal("pdf", offerLetterSrc)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
                >
                  Offer Letter
                </button>
                <button
                  onClick={() => openModal("pdf", completionCertSrc)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
                >
                  Completion Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Modal for both PDF and Image */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 w-full max-w-4xl h-[90%] rounded-lg overflow-hidden flex flex-col">
            {modalContent.type === "pdf" ? (
              <iframe
                src={modalContent.src}
                title="Document PDF"
                className="flex-grow w-full h-full"
              />
            ) : (
              <img
                src={modalContent.src}
                alt="Certificate"
                className="flex-grow w-full h-full object-contain"
              />
            )}
            <div className="flex justify-between p-4">
              <a
                href={modalContent.src}
                download
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Download
              </a>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
