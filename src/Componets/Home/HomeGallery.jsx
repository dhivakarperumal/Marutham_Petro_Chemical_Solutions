import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import productData from "../../data/product.json";

const categoryImages = {
  "Enamel Thinner": "/images/gallery/img_1.png",
  "Paint Thinner": "/images/gallery/img_2.png",
  "Solvent Thinner": "/images/gallery/img_3.png",
  "NC Thinner": "/images/gallery/img_4.png",
};

const categories = [...new Set(productData.map((product) => product.category))];

const HomeGallery = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [productPage, setProductPage] = useState(0);
  const activeCategory = categories[categoryIndex];
  const categoryProducts = useMemo(() => productData.filter((product) => product.category === activeCategory), [activeCategory]);
  const pageCount = Math.max(1, Math.ceil(categoryProducts.length / 3));

  useEffect(() => {
    setProductPage(0);
  }, [activeCategory]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProductPage((currentPage) => (currentPage + 1) % pageCount);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  const changeProductPage = (direction) => {
    setProductPage((currentPage) => (currentPage + direction + pageCount) % pageCount);
  };

  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-20 sm:py-24" aria-labelledby="home-gallery-title">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f8c99c35] blur-3xl" />
      <div className="relative mx-auto max-w-[1380px]">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]"><span className="h-0.5 w-10 bg-[#e96512]" /> Explore our range</div>
            <h2 id="home-gallery-title" className="max-w-[600px] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">One range. <span className="text-[#d60e1e]">Many finishes.</span></h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button key={category} type="button" onClick={() => setCategoryIndex(index)} className={`rounded-full border px-3 py-2 text-[0.68rem] font-extrabold transition ${index === categoryIndex ? "border-[#d60e1e] bg-[#d60e1e] text-white" : "border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512]"}`}>{category}</button>
            ))}
          </div>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="relative h-[360px] overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 shadow-[0_20px_45px_rgba(62,35,17,0.08)] sm:h-[500px] sm:p-5">
            <div className="absolute -bottom-16 right-8 h-48 w-48 rounded-full bg-[#f5c59d80] blur-3xl" />
            <img key={activeCategory} src={categoryImages[activeCategory]} alt={`${activeCategory} main range`} className="relative z-10 h-full w-full object-contain drop-shadow-[0_20px_15px_rgba(57,32,17,0.2)] animate-hero-page-turn" />
            <span className="absolute bottom-5 left-5 z-20 rounded-full bg-white px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#d60e1e] shadow-md sm:bottom-7 sm:left-7">{activeCategory}</span>
          </div>

          <div className="min-w-0">
            <div className="mb-5 flex items-end justify-between gap-4"><div><span className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-[#d94c16]">Three products per view</span><h3 className="mt-1 text-2xl font-extrabold text-[#282321]">{activeCategory}</h3></div><Link to={`/products?category=${encodeURIComponent(activeCategory)}`} className="inline-flex items-center gap-1 text-xs font-extrabold text-[#d60e1e] hover:text-[#b90c19]">View all <ArrowRight size={15} aria-hidden="true" /></Link></div>
            <div className="overflow-hidden px-2 py-2" aria-label={`${activeCategory} product images`}>
              <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${productPage * 100}%)` }}>
                {Array.from({ length: pageCount }, (_, pageIndex) => (
                  <div key={pageIndex} className="grid min-w-full grid-cols-3 gap-3 sm:gap-4">
                    {categoryProducts.slice(pageIndex * 3, pageIndex * 3 + 3).map((product) => (
                      <Link key={product.product_id} to={`/products/${product.product_id}`} className="group overflow-hidden rounded-md border border-[#eadfd6] bg-[#fffaf6] shadow-[0_10px_24px_rgba(62,35,17,0.06)] transition hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_16px_30px_rgba(62,35,17,0.12)]">
                        <div className="flex h-[190px] items-center justify-center bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-2 sm:h-[250px] sm:p-3"><img src={product.image} alt={product.product_name} className="h-full w-full object-contain transition duration-500 group-hover:scale-110" loading="lazy" /></div>
                        <span className="block truncate p-3 text-center text-sm font-extrabold text-[#282321] group-hover:text-[#d60e1e]">{product.quantity}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-[#eadfd6] pt-4"><span className="text-xs font-bold text-[#766e68]">{categoryProducts.length} products · {productPage + 1} / {pageCount}</span><div className="flex gap-2"><button type="button" onClick={() => changeProductPage(-1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfd6] text-[#766e68] hover:border-[#d60e1e] hover:text-[#d60e1e]" aria-label="Previous product images"><ChevronLeft size={17} aria-hidden="true" /></button><button type="button" onClick={() => changeProductPage(1)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d60e1e] text-white hover:bg-[#b90c19]" aria-label="Next product images"><ChevronRight size={17} aria-hidden="true" /></button></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
