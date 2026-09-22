import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import productData from "../../data/product.json";

const categoryImages = {
  "Enamel Thinner": "/images/gallery/img_1.png",
  "Paint Thinner": "/images/gallery/img_2.png",
  "Solvent Thinner": "/images/gallery/img_3.png",
  "NC Thinner": "/images/gallery/img_4.png",
};

const categories = [...new Set(productData.map((product) => product.category))].map((category) => ({
  name: category,
  image: categoryImages[category],
  products: productData.filter((product) => product.category === category).length,
}));

const HomeGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % categories.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + categories.length) % categories.length);
  };

  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-20 sm:py-24" aria-labelledby="home-gallery-title">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f8c99c35] blur-3xl" />
      <div className="relative mx-auto grid max-w-[1380px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative h-[390px] overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 shadow-[0_20px_45px_rgba(62,35,17,0.08)] sm:h-[540px] sm:p-5">
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[#e9651250]" />
          <div className="absolute -bottom-16 right-8 h-48 w-48 rounded-full bg-[#f5c59d80] blur-3xl" />
          <img src="/images/gallery/img_1.png" alt="Marutham Enamel Thinner range" className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_15px_rgba(57,32,17,0.2)]" />
          <span className="absolute bottom-5 left-5 z-20 rounded-full bg-white px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#d60e1e] shadow-md sm:bottom-7 sm:left-7">Marutham product range</span>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
            <span className="h-0.5 w-10 bg-[#e96512]" /> Explore our range
          </div>
          <h2 id="home-gallery-title" className="max-w-[600px] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">
            One range. <span className="text-[#d60e1e]">Many finishes.</span>
          </h2>
          <p className="mt-5 max-w-[520px] text-base leading-7 text-[#766e68]">
            Discover thinner solutions for enamel, paint, solvent, and NC applications.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-md border border-[#eadfd6] bg-[#fffaf6] p-4 sm:p-6">
            <div key={activeCategory.name} className="animate-hero-page-turn">
              <div className="flex h-[250px] items-center justify-center rounded-sm bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-2 sm:h-[320px]">
                <img src={activeCategory.image} alt={`${activeCategory.name} range`} className="h-full w-full object-contain drop-shadow-[0_14px_10px_rgba(57,32,17,0.16)]" />
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#d94c16]">Category {String(activeIndex + 1).padStart(2, "0")}</span>
                  <h3 className="mt-1 text-2xl font-extrabold text-[#282321]">{activeCategory.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#766e68]">{activeCategory.products} pack sizes available</p>
                </div>
                <Link to={`/products?category=${encodeURIComponent(activeCategory.name)}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d60e1e] text-white transition hover:bg-[#b90c19]" aria-label={`View ${activeCategory.name} products`}>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-[#eadfd6] pt-4">
              <div className="flex gap-1.5">
                {categories.map((category, index) => (
                  <button key={category.name} type="button" onClick={() => setActiveIndex(index)} className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#d60e1e]" : "w-1.5 bg-[#e7cfc0] hover:bg-[#e96512]"}`} aria-label={`Show ${category.name}`} aria-current={index === activeIndex ? "true" : undefined} />
                ))}
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => changeSlide(-1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#eadfd6] text-[#766e68] transition hover:border-[#d60e1e] hover:text-[#d60e1e]" aria-label="Previous category"><ChevronLeft size={16} aria-hidden="true" /></button>
                <button type="button" onClick={() => changeSlide(1)} className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d60e1e] text-white transition hover:bg-[#b90c19]" aria-label="Next category"><ChevronRight size={16} aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
