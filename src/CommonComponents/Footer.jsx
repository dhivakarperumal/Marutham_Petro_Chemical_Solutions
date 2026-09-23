import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaAngleRight, FaMapMarkerAlt, FaClock, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const ourProducts = [
    "Enamel Thinner",
    "Paint Thinner",
    "Solvent Thinner",
    "NC Thinner"
  ];

  return (
    <footer className="bg-[#111317] border-t border-gray-800 mt-auto text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        {/* We use a responsive grid that will naturally wrap items to the next row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-10">
          
          {/* 1. Logo & Info */}
          <div className="space-y-6">
            <div className="bg-white inline-block p-2 rounded-md">
              <img 
                src="/images/logo.png" 
                alt="Marutham Marketing" 
                className="h-12 object-contain" 
              />
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed text-justify">
              "Choosing Marutham Thinner for your projects offers several distinct advantages that make it stand out from other thinners in the market."
            </p>
           
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0a8c43] hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0a8c43] hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0a8c43] hover:text-white transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#0a8c43] hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

           {/* 3. Quick Links */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-gray-400 text-[15px] hover:text-[#fb5921] transition-all group"
                  >
                    <FaAngleRight className="mr-2 text-[#fb5921] transition-transform group-hover:translate-x-1" size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Our Products */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-6">Our Products</h3>
            <ul className="space-y-4">
              {ourProducts.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/products?category=${encodeURIComponent(item)}`} 
                    className="flex items-center text-gray-400 text-[15px] hover:text-[#fb5921] transition-all group"
                  >
                    <FaAngleRight className="mr-2 text-[#fb5921] transition-transform group-hover:translate-x-1" size={14} />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         

          {/* 4. Contact Us */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 shrink-0">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <a href="tel:+91 84380 18090" className="text-gray-300 text-[15px] hover:text-[#fb5921] transition-colors">+91 84380 18090</a>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 shrink-0">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <a href="mailto:maruthamthinner@gmail.com" className="text-gray-400  text-[15px] ">
                  maruthamthinner@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start mt-5">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 shrink-0 mt-1">
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                S.F,No.16/9, Dharmapuri Main Road, Sundrampalli Village, Tirupattur District - 635 654
              </p>
            </div>

            
          </div>

         
          {/* 6. Newsletter Subscription */}
          <div>
            <h3 className="text-[17px] font-bold text-white mb-6">Newsletter</h3>
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#1c1f26] text-[14px] sm:text-[15px] text-gray-300 px-3 sm:px-4 py-3 rounded-l-md border border-gray-800 focus:outline-none focus:border-[#fb5921] w-full min-w-0"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white px-4 sm:px-6 py-3 rounded-r-md font-[500] transition-colors whitespace-nowrap shrink-0"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <div className="flex items-center mb-3">
                <FaClock className="text-[#fb5921] text-lg mr-3 shrink-0" />
                <h3 className="text-[17px] font-bold text-white">Hours:</h3>
              </div>
              <p className="text-gray-400 text-[15px] ml-7">
                10:00am - 08:00pm<br/>
                Monday To Sunday
              </p>
            </div>

          </div>

          
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Marutham Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
