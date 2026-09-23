import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUsers, FaRegClock, FaFileAlt, FaChevronDown, FaComments } from 'react-icons/fa';
import { MdLocalShipping, MdSupportAgent, MdEnergySavingsLeaf, MdVerifiedUser } from 'react-icons/md';

import PageHeader from '../../CommonComponents/PageHeader';

const faqs = [
  {
    question: 'How can I get a quotation?',
    answer: 'You can request a quotation by filling out our contact form, emailing us at info@maruthammarketing.com, or contacting us directly via WhatsApp with your required product name, volume, and quantity.',
  },
  {
    question: 'Do you supply across India?',
    answer: 'Yes! We supply and distribute our full range of thinner products and chemical solutions across Pan-India with scheduled, safe freight logistics.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We cater to painting contractors, automotive refinishing workshops, furniture and woodworking units, industrial manufacturing plants, and coating applications.',
  },
  {
    question: 'How soon will I get a response?',
    answer: 'Our dedicated customer support and sales team responds to all inquiries within 2 to 4 business hours during working days.',
  },
  {
    question: 'Can I visit your office?',
    answer: 'Yes, you are always welcome to visit our head office in Ambur, Tirupathur District, Tamil Nadu (Mon - Sat, 9:00 AM - 6:00 PM).',
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* 1. HERO SECTION */}
      <PageHeader title="Contact Us" />

      {/* 2. INFO CARDS */}
      <section className="container mx-auto px-4 md:px-8 relative z-20 -mt-12 mb-16" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#fb5921] flex items-center justify-center text-white shrink-0 text-xl shadow-md">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Call Us</h4>
              <p className="text-gray-900 font-semibold mt-1">+91 84380 18090</p>
              <p className="text-xs text-gray-500 mt-1">Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#e41a15] flex items-center justify-center text-white shrink-0 text-xl shadow-md">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Email Us</h4>
              <p className="text-gray-900 font-semibold mt-1 text-sm break-all">maruthamthinner@gmail.com</p>
              <p className="text-xs text-gray-500 mt-1">We'll get back to you soon</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#fb5921] flex items-center justify-center text-white shrink-0 text-xl shadow-md">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Visit Us</h4>
              <p className="text-gray-600 text-sm mt-1 leading-snug">S.F, No.16/9, Dharmapuri Main Road,<br/>Sundrampalli Village, Tirupattur District - 635 654</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 flex gap-4 items-start border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-[#e41a15] flex items-center justify-center text-white shrink-0 text-xl shadow-md">
              <FaFileAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Request a Quote</h4>
              <p className="text-gray-600 text-sm mt-1 leading-snug">Get the best pricing for your requirements</p>
              <a href="#" className="text-[#fb5921] text-sm font-bold mt-2 inline-flex items-center hover:underline">Get a Quote &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: FORM & MAP */}
      <section className="container mx-auto px-4 md:px-8 py-8 mb-16" data-aos="fade-up" data-aos-delay="80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="mb-8">
              <h4 className="text-[#fb5921] font-bold text-xs tracking-[0.2em] uppercase mb-2">Send Us a Message</h4>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#e41a15]"></div>
                <h2 className="text-3xl font-extrabold text-gray-900">Get in <span className="text-[#e41a15]">Touch</span></h2>
              </div>
              <p className="text-gray-600 mt-3 text-sm">Fill out the form below and our team will get back to you shortly.</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name *" className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]" required />
                <input type="text" placeholder="Company Name" className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]" />
                <input type="email" placeholder="Email Address *" className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]" required />
                <input type="tel" placeholder="Phone Number *" className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]" required />
                
                <div className="relative">
                  <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]">
                    <option>Product Interest</option>
                    <option>Polymers</option>
                    <option>Solvents</option>
                    <option>Chemicals</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <FaChevronDown size={12} />
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-500 appearance-none focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]">
                    <option>Industry Type</option>
                    <option>Manufacturing</option>
                    <option>Automotive</option>
                    <option>Construction</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <FaChevronDown size={12} />
                  </div>
                </div>
              </div>

              <textarea placeholder="Your Message *&#10;Tell us about your requirement..." rows="4" className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#fb5921] focus:ring-1 focus:ring-[#fb5921]" required></textarea>

              <button type="submit" className="bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white font-medium py-3 px-8 rounded-md flex items-center transition-all shadow-md mt-2 w-fit">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map & Info */}
          <div className="bg-[#fcfdfd] rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
            <div className="mb-6">
              <h4 className="text-[#fb5921] font-bold text-xs tracking-[0.2em] uppercase mb-2">Our Location</h4>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#e41a15]"></div>
                <h2 className="text-3xl font-extrabold text-gray-900">Find Us <span className="text-[#e41a15]">Here</span></h2>
              </div>
            </div>

            <div className="w-full h-[250px] rounded-xl overflow-hidden mb-6 relative border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.471676644265!2d78.5074213!3d12.224163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac394747738ad3%3A0x6e902b36e9ff762!2sTirupathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-md shadow-md text-xs font-bold flex items-center hover:bg-gray-50 cursor-pointer text-gray-800">
                View Larger Map <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
              <div className="bg-[#fff2ef] p-5 rounded-xl border border-[#ffe4dc] flex gap-4">
                <div className="text-[#fb5921] mt-1 shrink-0"><FaMapMarkerAlt size={20} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Head Office</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    S.F, No.16/9, Dharmapuri Main Road,<br/>
                    Sundrampalli Village,<br/>
                    Tirupattur District - 635 654
                  </p>
                </div>
              </div>
              <div className="bg-[#fff2ef] p-5 rounded-xl border border-[#ffe4dc] flex gap-4">
                <div className="text-[#fb5921] mt-1 shrink-0"><FaRegClock size={20} /></div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Working Hours</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Monday - Saturday<br/>
                    9:00 AM - 6:00 PM<br/>
                    Sunday - Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURES STRIP */}
      <section className="border-y border-gray-100 bg-white py-10" data-aos="fade-up" data-aos-delay="120">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between gap-6 md:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#fb5921] shrink-0 text-2xl shadow-sm border border-[#ffe4dc]">
                <MdLocalShipping />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Pan India Supply</h4>
                <p className="text-xs text-gray-500">Delivery across India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#fb5921] shrink-0 text-2xl shadow-sm border border-[#ffe4dc]">
                <MdVerifiedUser />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Quality Products</h4>
                <p className="text-xs text-gray-500">Certified & reliable</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#e41a15] shrink-0 text-2xl shadow-sm border border-[#ffe4dc]">
                <FaUsers />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Dedicated Support</h4>
                <p className="text-xs text-gray-500">Always here to help</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fff0eb] flex items-center justify-center text-[#fb5921] shrink-0 text-2xl shadow-sm border border-[#ffe4dc]">
                <MdEnergySavingsLeaf />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Sustainable Solutions</h4>
                <p className="text-xs text-gray-500">For a better tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="relative w-full overflow-hidden bg-white py-20" data-aos="fade-up" data-aos-delay="150">
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* Left Image (Truck) */}
          <div className="w-full lg:w-5/12 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] lg:h-[460px]">
            <img src="/images/hero/img1.png" alt="Marutham Marketing Transport" className="w-full h-full object-cover" />
          </div>
          
          {/* Middle FAQ */}
          <div className="w-full lg:w-4/12">
            <h4 className="text-[#fb5921] font-bold text-xs tracking-[0.2em] uppercase mb-2">Frequently Asked Questions</h4>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-[#e41a15]"></div>
              <h2 className="text-3xl font-extrabold text-gray-900">Quick <span className="text-[#e41a15]">Answers</span></h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-lg border transition-all duration-200 overflow-hidden bg-white shadow-sm ${
                      isOpen
                        ? 'border-[#fb5921] ring-1 ring-[#fb5921]/20'
                        : 'border-gray-200 hover:border-[#fb5921]/60'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-4 text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-gray-800 pr-3">{faq.question}</span>
                      <span
                        className={`text-[#e41a15] font-extrabold text-xl leading-none transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fffdfb]">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="w-full lg:w-3/12 flex flex-col items-center mt-10 lg:mt-0">
            <div className="bg-[#fff6f4] rounded-2xl p-8 text-center shadow-sm w-full max-w-sm relative">
              <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-[#fb5921] text-3xl shadow-sm mb-4">
                <FaComments size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
              <p className="text-sm text-gray-600 mb-6">Our team is here to help you with any product, pricing, or technical queries.</p>
              <button className="bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white font-medium py-3 px-6 rounded-md transition-all shadow-md w-full">
                Contact Us Now &rarr;
              </button>
            </div>
            
            <div className="font-[cursive] text-4xl text-gray-800 rotate-[-8deg] mt-8 text-center hidden md:block">
               Let's <br/>Grow Together
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
