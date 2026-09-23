import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import reviewData from "../../data/review.json";
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-[5%] pb-20 pt-10 sm:pb-24 sm:pt-12" aria-labelledby="reviews-title">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#f8c99c40] blur-3xl" />
      <div className="relative mx-auto max-w-[1380px]">
        {/* Header with Title and Nav Controls */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div data-aos="fade-right">
            <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-10 bg-[#e96512]" /> Customer voice
            </div>
            <h2 id="reviews-title" className="text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.045em] text-[#282321]">
              Trusted for the <span className="text-[#d60e1e]">finish.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2" data-aos="fade-left">
            <button
              type="button"
              className="reviews-swiper-prev flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#766e68] shadow-sm transition hover:border-[#d60e1e] hover:text-[#d60e1e] cursor-pointer"
              aria-label="Previous customer review"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="reviews-swiper-next flex h-9 w-9 items-center justify-center rounded-full bg-[#d60e1e] text-white shadow-sm transition hover:bg-[#b90c19] cursor-pointer"
              aria-label="Next customer review"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Seamless Infinite Swiper (Continues continuously without rewinding) */}
        <div className="overflow-hidden px-1 py-1" aria-label="Customer review swiper" data-aos="fade-up" data-aos-delay="120">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={750}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".reviews-swiper-prev",
              nextEl: ".reviews-swiper-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="reviews-swiper !py-2"
          >
            {reviewData.map((item, index) => {
              const initials = item.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2);
              return (
                <SwiperSlide key={`${item.name}-${index}`} className="h-auto">
                  <article className="flex h-full min-h-[290px] flex-col rounded-[6px] border border-[#eadfd6] bg-white p-6 shadow-[0_14px_32px_rgba(62,35,17,0.06)] transition duration-300 hover:border-[#f3b58e] hover:shadow-[0_18px_36px_rgba(62,35,17,0.1)]">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex gap-1 text-[#e96512]" aria-label={`${item.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }, (_, starIdx) => (
                          <Star
                            key={starIdx}
                            size={15}
                            fill={starIdx < item.rating ? "currentColor" : "none"}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <Quote size={28} className="text-[#f3c8a5]" fill="currentColor" strokeWidth={1.2} aria-hidden="true" />
                    </div>
                    <blockquote className="flex-1 text-base font-bold leading-7 text-[#4f4843]">
                      “{item.review}”
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 border-t border-[#eee3da] pt-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1eb] text-xs font-extrabold text-[#d60e1e]">
                        {initials}
                      </div>
                      <div>
                        <cite className="block text-sm font-extrabold not-italic text-[#282321]">{item.name}</cite>
                        <span className="text-xs font-semibold text-[#a0968e]">Verified customer</span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
