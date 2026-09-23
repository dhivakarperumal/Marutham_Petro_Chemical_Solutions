import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="hidden md:block bg-[#121416]  text-white" data-aos="fade-down" data-aos-duration="600">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-3 px-4 py-2 text-[11px] md:px-8 md:text-xs">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-gray-200" data-aos="fade-right" data-aos-delay="100">
          <a href="tel:+918438018090" className="flex items-center gap-2 font-medium transition hover:text-[#fb5921]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[#fb5921]">
              <FaPhoneAlt size={10} />
            </span>
            <span>+91 84380 18090</span>
          </a>
          <a href="mailto:maruthamthinner@gmail.com" className="flex items-center gap-2 font-medium transition hover:text-[#fb5921]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-[#fb5921]">
              <FaEnvelope size={10} />
            </span>
            <span>maruthamthinner@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3" data-aos="fade-left" data-aos-delay="100">
          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-gray-300 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fb5921]" />
            Mon - Sun | 10:00 AM - 08:00 PM
          </div>

          <div className="flex items-center gap-2 text-gray-200">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#fb5921] hover:text-[#fb5921]">
              <FaFacebookF size={12} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#fb5921] hover:text-[#fb5921]">
              <FaInstagram size={12} />
            </a>
            <a href="https://wa.me/918438018090" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#fb5921] hover:text-[#fb5921]">
              <FaWhatsapp size={12} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#fb5921] hover:text-[#fb5921]">
              <FaTwitter size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
