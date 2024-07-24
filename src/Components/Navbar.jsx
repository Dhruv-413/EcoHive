import { useState, useEffect, useRef } from 'react';
import ecoHiveLogo from '../../public/assets/EcoHive.png';
import ecoHiveLogoWhite from '../../public/assets/EcoHiveWhite.png'; // White version of EcoHive logo
import { useNavigate } from 'react-router-dom'; // Assuming Modal component is imported correctly

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
      sectionRefs.current[section.id] = section;
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = sectionRefs.current[sectionId.substring(1)];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full overflow-x-hidden z-20 top-0 left-0 transition-colors duration-300 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg dark:bg-gray-900 dark:bg-opacity-50' : 'bg-transparent'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a onClick={scrollToTop} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
            <img src={isScrolled ? ecoHiveLogo : ecoHiveLogoWhite} className="h-10" alt="EcoHive Logo" />
            <span className={`self-center text-3xl font-bold whitespace-nowrap ${isScrolled ? 'text-black dark:text-white' : 'text-white'}`}>EcoHive</span>
          </a>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button onClick={() => navigate("/userOrOrg")} type="button" className="text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-95">
              Get started
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-white bg-opacity-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:bg-opacity-0 dark:bg-gray-900 md:dark:bg-opacity-0 dark:border-gray-700">
              <li>
                <a href="#home" onClick={(e) => handleScrollToSection(e, '#home')} className={`nav-link-container ${activeSection === '#home' ? 'active' : ''} block py-2 px-3 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`} aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollToSection(e, '#about')} className={`nav-link-container ${activeSection === '#about' ? 'active' : ''} block py-2 px-3 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}>About</a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScrollToSection(e, '#features')} className={`nav-link-container ${activeSection === '#features' ? 'active' : ''} block py-2 px-3 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}>Features</a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleScrollToSection(e, '#faq')} className={`nav-link-container ${activeSection === '#faq' ? 'active' : ''} block py-2 px-3 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}>FAQ</a>
              </li>
              <li>
                <a href="#team-section" onClick={(e) => handleScrollToSection(e, '#team-section')} className={`nav-link-container ${activeSection === '#team-section' ? 'active' : ''} block py-2 px-3 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'} rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700`}>Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
