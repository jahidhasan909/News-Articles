import { useState } from 'react';
import { 
  FiHome, 
  FiHeart, 
  FiBell, 
  FiUsers 
} from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi2';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const footerSections = [
    {
      title: 'Company',
      links: ['Home', 'About Us', 'Our Work', 'Gallery', 'Blog'],
    },
    {
      title: 'Donate',
      links: ['Donate', 'Blood Donate', 'Blood Request'],
    },
    {
      title: 'Others',
      links: ['Contact', 'Terms of Conditions', 'Privacy Policy'],
    },
  ];

  return (
    <>
     
      <footer className="hidden md:block mt-16 bg-[#171717] text-gray-300 font-sans border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
           
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="w-24">
                <img 
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                  alt="Bandhan Paribar Logo" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-[15px] leading-relaxed text-gray-300/90 pr-0 lg:pr-10">
                This institution is striving to build an ideal welfare society by following the 
                footsteps of the Prophet of Humanity, the Messenger of Human Freedom and 
                Peace, the ideal of human service, the Prophet Muhammad (PBUH), in the 
                service of humanity.
              </p>
            </div>

            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h6 className="text-white text-base font-medium mb-2">
                    {section.title}
                  </h6>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex} 
                        href="#" 
                        className="link link-hover text-[15px] text-gray-400 hover:text-white transition-colors duration-200 w-fit"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

       
        <div className="w-full border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-center items-center">
            <p className="text-sm text-gray-500">
              © 2026 Bandhan Paribar. All rights reserved
            </p>
          </div>
        </div>
      </footer>

      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2.5 z-50 shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          
         
          <button 
            onClick={() => setActiveTab('home')}
            className={`p-2 text-gray-500 hover:text-gray-900 transition-colors ${
              activeTab === 'home' ? 'text-sky-500' : ''
            }`}
          >
            <FiHome className="w-6 h-6" />
          </button>

   
          <button 
            onClick={() => setActiveTab('donate')}
            className={`p-2 text-gray-500 hover:text-gray-900 transition-colors ${
              activeTab === 'donate' ? 'text-sky-500' : ''
            }`}
          >
            <FiHeart className="w-6 h-6" />
          </button>

         
          <button 
            onClick={() => setActiveTab('alert')}
            className={`p-2 text-gray-500 hover:text-gray-900 transition-colors ${
              activeTab === 'alert' ? 'text-sky-500' : ''
            }`}
          >
            <FiBell className="w-6 h-6" />
          </button>

        
          <button 
            onClick={() => setActiveTab('partnership')}
            className={`p-2 text-gray-500 hover:text-gray-900 transition-colors ${
              activeTab === 'partnership' ? 'text-sky-500' : ''
            }`}
          >
            <FiUsers className="w-6 h-6" />
          </button>

        
          <button 
            onClick={() => setActiveTab('articles')}
            className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-xl font-medium text-sm shadow-sm transition-all active:scale-95"
          >
            <HiOutlineDocumentText className="w-5 h-5" />
            <span>Articles</span>
          </button>

        </div>
      </div>
    </>
  );
};

export default Footer;