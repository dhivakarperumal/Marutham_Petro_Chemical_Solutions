import { useMemo, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import productData from "../../data/product.json";
import "swiper/css";

const categoryImages = {
  "Enamel Thinner": "/images/gallery/img_1.png",
  "Paint Thinner": "/images/gallery/img_2.png",
  "Solvent Thinner": "/images/gallery/img_3.png",
  "NC Thinner": "/images/gallery/img_4.png",
};

const HomeGallery = () => {
  const swiperRef = useRef(null);

  // Map each category to its starting product index in productData
  const categoryStartIndices = useMemo(() => {
    const map = {};
    productData.forEach((product, idx) => {
      if (map[product.category] === undefined) {
        map[product.category] = idx;
      }
    });
    return map;
  }, []);

  const categories = useMemo(() => Object.keys(categoryStartIndices), [categoryStartIndices]);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "Enamel Thinner");

  // When user clicks a category tab, slide smoothly to that category's first product
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const targetIdx = categoryStartIndices[category];
    if (swiperRef.current && targetIdx !== undefined) {
      swiperRef.current.slideToLoop(targetIdx, 650);
    }
  };

  // As the swiper automatically slides through products across categories,
  // update the activeCategory and left static image when moving into a new category
  const handleSlideChange = (swiper) => {
    const activeProduct = productData[swiper.realIndex];
    if (activeProduct && activeProduct.category !== activeCategory) {
      setActiveCategory(activeProduct.category);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-10 sm:py-12" aria-labelledby="home-gallery-title">
      <div className="absolute -left-24 top-10 h-60 w-60 rounded-full bg-[#f8c99c30] blur-3xl" />
      <div className="relative mx-auto max-w-[1380px]">
        {/* Gallery Section Header */}
        <div className="mb-5 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-8 bg-[#e96512]" /> Product Gallery Showcase
            </div>
            <h2 id="home-gallery-title" className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold leading-[1] tracking-[-0.035em] text-[#282321]">
              Visual Showcase. <span className="text-[#d60e1e]">Product Gallery.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`rounded-full border px-3 py-1.5 text-[0.68rem] font-extrabold transition cursor-pointer ${
                  category === activeCategory
                    ? "border-[#d60e1e] bg-[#d60e1e] text-white shadow-sm"
                    : "border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"
                }`}
              >
                {category}
              </button>
            ))}
            <Link
              to="/gallery"
              className="ml-1 inline-flex items-center gap-1 text-xs font-extrabold text-[#d60e1e] hover:text-[#b90c19] transition"
            >
              View all <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <div className="ml-1 flex items-center gap-1">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#766e68] shadow-sm transition hover:border-[#d60e1e] hover:text-[#d60e1e] cursor-pointer"
                aria-label="Previous product"
              >
                <ChevronLeft size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d60e1e] text-white shadow-sm transition hover:bg-[#b90c19] cursor-pointer"
                aria-label="Next product"
              >
                <ChevronRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Content: Left Static Image with Small Gap + Right Sequential Swiper */}
        <div className="grid items-stretch gap-3 sm:gap-4 lg:grid-cols-[250px_1fr] xl:grid-cols-[270px_1fr]">
          {/* Left Static Category Image (Updates smoothly as the swiper moves across categories) */}
          <div className="relative flex h-[255px] sm:h-[270px] lg:h-[280px] flex-col overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 shadow-[0_12px_28px_rgba(62,35,17,0.06)]">
            <div className="absolute -bottom-12 right-4 h-32 w-32 rounded-full bg-[#f5c59d80] blur-2xl" />
            <img
              key={activeCategory}
              src={categoryImages[activeCategory] || "/images/gallery/img_1.png"}
              alt={`${activeCategory} main range`}
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_12px_12px_rgba(57,32,17,0.18)] animate-hero-page-turn"
            />
            <span className="absolute bottom-3 left-3 z-20 rounded-full bg-white/95 px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-[#d60e1e] shadow-sm">
              {activeCategory}
            </span>
          </div>

          {/* Right Product Swiper (All categories sequentially; seamlessly continues from Enamel -> Paint -> Solvent -> NC -> Enamel) */}
          <div className="min-w-0">
            <div className="overflow-hidden">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onRealIndexChange={handleSlideChange}
                modules={[Autoplay]}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={14}
                slidesPerView={1}
                breakpoints={{
                  480: { slidesPerView: 1.5, spaceBetween: 12 },
                  640: { slidesPerView: 2, spaceBetween: 14 },
                  1024: { slidesPerView: 3, spaceBetween: 14 },
                  1280: { slidesPerView: 3, spaceBetween: 16 },
                }}
                className="home-gallery-swiper"
              >
                {productData.map((product, index) => (
                  <SwiperSlide key={`${product.product_id}-${index}`} className="h-auto">
                    <Link
                      to={`/products/${product.product_id}`}
                      className="group relative flex h-[255px] sm:h-[270px] lg:h-[280px] flex-col items-center justify-center overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 shadow-[0_8px_20px_rgba(62,35,17,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_14px_26px_rgba(62,35,17,0.1)]"
                      aria-label={product.product_name}
                    >
                      <span className="absolute left-3 top-3 z-20 rounded-full border border-[#f3b58e] bg-white/95 px-2.5 py-1 text-[0.55rem] font-extrabold uppercase tracking-[0.08em] text-[#d60e1e] shadow-sm">
                        {product.quantity}
                      </span>
                      <img
                        src={product.image}
                        alt={product.product_name}
                        className="relative z-10 h-full w-full object-contain drop-shadow-[0_12px_10px_rgba(57,32,17,0.16)] transition duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
