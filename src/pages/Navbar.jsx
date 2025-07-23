import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  // Intersection Observer for active link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Get theme from localStorage on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Set to dark mode by default if no preference is found
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);  // Persist the theme change
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleLinkClick = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  const yOffset = -80; // Adjust this based on your navbar height
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });

  // Close mobile menu after click
  setIsOpen(false);
};

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 p-6 flex justify-between items-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-black dark:text-white shadow-lg rounded-b-3xl">
        {/* Left side: Logo */}
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 animate-pulse cursor-pointer">
          SibiSakaravarthi S
        </div>

        {/* Right side: Links + Toggle */}
        <div className="flex items-center space-x-6">
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-all duration-300 text-black dark:text-white hover:text-yellow-400 active:scale-90"
              aria-label="Toggle navigation"
            >
              {/* Hamburger Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href.slice(1))}
                className={`font-semibold text-xl transition-all duration-300 hover:text-yellow-400 active:scale-90 transform-gpu ${
                  activeSection === link.href.slice(1)
                    ? 'text-yellow-400 scale-110'
                    : 'text-black dark:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 dark:hover:bg-gray-500 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 0112.21 3a7 7 0 107.79 9.79z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h1M3.34 12h1m14.95-4.95l.707.707M4.95 19.05l.707.707M19.05 19.05l-.707.707M4.95 4.95l.707.707M12 7a5 5 0 110 10 5 5 0 010-10z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sticky fixed inset-0 top-20 z-50 bg-black/30 backdrop-blur-md backdrop-saturate-150 text-white md:hidden animate-slide-down">
          <div className="flex flex-col p-4 space-y-2 bg-gray-800 dark:bg-gray-900">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href.slice(1))}
                className={`block font-semibold text-lg transition-all hover:text-yellow-400 active:scale-90 ${
                  activeSection === link.href.slice(1)
                    ? 'text-yellow-400 scale-110'
                    : ''
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
