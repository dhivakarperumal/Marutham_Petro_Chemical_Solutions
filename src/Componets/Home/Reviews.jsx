import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import reviewData from "../../data/review.json";

const carouselReviews = [...reviewData, ...reviewData.slice(0, 4)];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => currentIndex >= reviewData.length - 1 ? 0 : currentIndex + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-[5%] py-20 sm:py-24" aria-labelledby="reviews-title">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#f8c99c40] blur-3xl" />
      <div className="relative mx-auto max-w-[1380px]">
        <div className="mb-8 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
          <span className="h-0.5 w-10 bg-[#e96512]" /> Customer voice
        </div>
        <h2 id="reviews-title" className="mb-10 text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.045em] text-[#282321]">
          Trusted for the <span className="text-[#d60e1e]">finish.</span>
        </h2>

        <div className="overflow-hidden" aria-label="Automatic customer review slider">
          <div
            className="flex gap-5 transition-transform duration-700 ease-out [--slide-offset:calc(86%+1.25rem)] sm:[--slide-offset:calc(48%+1.25rem)] lg:[--slide-offset:calc(31.5%+1.25rem)] xl:[--slide-offset:calc(24%+1.25rem)]"
            style={{ "--slide-index": activeIndex, transform: "translateX(calc(-1 * var(--slide-index) * var(--slide-offset)))" }}
          >
            {carouselReviews.map((item, index) => {
              const initials = item.name.split(" ").map((part) => part[0]).join("").slice(0, 2);
              return (
                <article key={`${item.name}-${index}`} className="flex min-h-[290px] min-w-[86%] flex-col rounded-[6px] border border-[#eadfd6] bg-white p-6 shadow-[0_14px_32px_rgba(62,35,17,0.06)] sm:min-w-[48%] lg:min-w-[31.5%] xl:min-w-[24%]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-1 text-[#e96512]" aria-label={`${item.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill={index < item.rating ? "currentColor" : "none"} aria-hidden="true" />)}
                    </div>
                    <Quote size={28} className="text-[#f3c8a5]" fill="currentColor" strokeWidth={1.2} aria-hidden="true" />
                  </div>
                  <blockquote className="flex-1 text-base font-bold leading-7 text-[#4f4843]">“{item.review}”</blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#eee3da] pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1eb] text-xs font-extrabold text-[#d60e1e]">{initials}</div>
                    <div>
                      <cite className="block text-sm font-extrabold not-italic text-[#282321]">{item.name}</cite>
                      <span className="text-xs font-semibold text-[#a0968e]">Verified customer</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
