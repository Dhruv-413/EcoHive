import { useState } from 'react';
import ecoHiveLogo from '../../public/assets/EcoHiveWhite.png';
import ContactModal from '../Components/Contactus';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="bg-gray-800 text-white overflow-x-hidden">
        <div className="container mx-auto p-6 lg:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 px-5">
            <a onClick={scrollToTop} className="flex items-center cursor-pointer mb-4 md:mb-0">
              <img src={ecoHiveLogo} className="h-12 mr-3" alt="EcoHive Logo" />
              <span className="self-center text-3xl font-bold">EcoHive</span>
            </a>
          </div>
          <hr className="border-gray-100 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">Resources</h2>
              <ul className="space-y-2">
                <li><a href="https://react.dev/" className="hover:underline transition" target='_blank' rel='noreferrer'>React JS</a></li>
                <li><a href="https://tailwindcss.com/" className="hover:underline transition" target='_blank' rel='noreferrer'>Tailwind CSS</a></li>
                <li><a href="https://firebase.google.com/docs" className="hover:underline transition" target='_blank' rel='noreferrer'>Firebase</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase mb-4">Support</h2>
              <ul className="space-y-2">
                <li><a onClick={openModal} className="hover:underline cursor-pointer transition">Contact Us</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-end mt-8 pr-10">
              <button
                onClick={scrollToTop}
                className="text-white animate-bounce p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <hr className="border-gray-100 mt-6 mb-4" />
          <div className="text-center">
            <span className="text-sm">© 2024 <a href="#" className="hover:underline transition" target='_blank' rel='noreferrer'>EcoHive™</a>. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Footer;
