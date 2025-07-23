import { FaLinkedin, FaGithub, FaEnvelope, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.user_name.value;
    const email = form.email_id.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailTo = `mailto:sibisakaravarthi27@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${userName}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailTo;
  };

  return (
    <section id="contact" className="py-10 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Contact me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaUser className="text-2xl text-blue-600" />
              <span className="text-lg">Sibisakaravarthi S</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-blue-600" />
              <span className="text-lg">Coimbatore, India</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-blue-600" />
              <a href="mailto:sibisakaravarthi27@gmail.com" className="hover:underline">
                sibisakaravarthi27@gmail.com
              </a>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="https://www.linkedin.com/in/sibisakaravarthi-s-a223a621b/" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-500" />
              </a>
              <a href="https://github.com/Sibisakaravarthi" target="_blank" rel="noreferrer">
                <FaGithub className="text-3xl text-gray-800 dark:text-white hover:text-gray-600" />
              </a>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                name="email_id"
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
