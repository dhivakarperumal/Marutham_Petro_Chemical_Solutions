import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import reviewData from "../../data/review.json";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const review = reviewData[activeIndex];
  const initials = review.name.split(" ").map((part) => part[0]).join("").slice(0, 2);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % reviewData.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const changeReview = (direction) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + reviewData.length) % reviewData.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-[5%] py-20 sm:py-24" aria-labelledby="reviews-title">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#f8c99c40] blur-3xl" />
      <div className="relative mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24">
        <div>
          <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
            <span className="h-0.5 w-10 bg-[#e96512]" /> Customer voice
          </div>
          <h2 id="reviews-title" className="max-w-[430px] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">
            Trusted for the <span className="text-[#d60e1e]">finish.</span>
          </h2>
          <p className="mt-5 max-w-[390px] text-base leading-7 text-[#766e68]">
            Real feedback from painters, professionals, and teams who rely on Marutham products.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => changeReview(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#766e68] transition hover:border-[#d60e1e] hover:text-[#d60e1e]" aria-label="Previous review">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => changeReview(1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d60e1e] text-white transition hover:bg-[#b90c19]" aria-label="Next review">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
            <span className="ml-2 text-xs font-extrabold tracking-[0.12em] text-[#a0968e]">{String(activeIndex + 1).padStart(2, "0")} / {String(reviewData.length).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden rounded-[6px] border border-[#eadfd6] bg-white p-7 shadow-[0_20px_45px_rgba(62,35,17,0.07)] sm:p-10">
          <div className="absolute right-8 top-7 text-[#f8c99c]">
            <Quote size={64} fill="currentColor" strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div key={review.name} className="relative z-10 animate-hero-page-turn">
            <div className="mb-8 flex gap-1 text-[#e96512]" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={18} fill={index < review.rating ? "currentColor" : "none"} aria-hidden="true" />)}
            </div>
            <blockquote className="max-w-[720px] text-[clamp(1.45rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#2d3035]">
              “{review.review}”
            </blockquote>
            <div className="mt-9 flex items-center gap-3 border-t border-[#eee3da] pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1eb] text-sm font-extrabold text-[#d60e1e]">{initials}</div>
              <div>
                <cite className="block text-sm font-extrabold not-italic text-[#282321]">{review.name}</cite>
                <span className="text-xs font-semibold text-[#a0968e]">Verified customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Reviews;
