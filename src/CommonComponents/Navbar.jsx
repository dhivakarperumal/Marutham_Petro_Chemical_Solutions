import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="relative w-full bg-white shadow-sm border-b border-gray-100 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/logo.png" alt="Marutham Marketing" className="h-12 md:h-14 object-contain" />
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium text-[#4a5568]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`pb-1 border-b-2 transition-colors ${
                  isActive 
                    ? 'text-[#f0301a] border-[#f0301a]' 
                    : 'border-transparent hover:text-[#f0301a]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 md:space-x-5">
          {/* Search Icon */}
          <button className="hidden sm:block p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Get a Quote Button */}
          <button className="hidden sm:flex bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white font-medium py-2.5 px-5 md:px-6 rounded-md items-center transition-all shadow-md">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden p-2 text-black hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6h11M4 12h16M13 18h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors py-2 border-b border-gray-50 ${
                  isActive ? 'text-[#f0301a]' : 'text-[#4a5568] hover:text-[#f0301a]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <button className="bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-all shadow-md w-full mt-4">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;