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
          </div>
        </div>

        {/* Gallery Content: Distinct Left Main Range Card + Right Swiper with Inset Flanking Arrows */}
        <div className="grid items-stretch gap-4 sm:gap-6 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr]">
          {/* Left Main Image Card (Visually Distinct: Warm Ambient Gradient, Featured Badge & Solid Accent Badge) */}
          <div className="relative flex h-[260px] sm:h-[275px] lg:h-[285px] flex-col overflow-hidden rounded-lg border-2 border-[#e96512]/40 bg-[linear-gradient(150deg,#fff4eb_0%,#fcd9c0_55%,#f7bea0_100%)] p-3.5 shadow-[0_14px_32px_rgba(233,101,18,0.12)] ring-4 ring-[#e96512]/10">
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#e96512]/30 blur-2xl" />

            {/* Featured Tag indicating this is the Main Range */}
            <div className="relative z-20 self-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#282321] px-2.5 py-0.5 text-[0.54rem] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e96512] animate-pulse" /> Range
              </span>
            </div>

            {/* Main Category Image */}
            <img
              key={activeCategory}
              src={categoryImages[activeCategory] || "/images/gallery/img_1.png"}
              alt={`${activeCategory} main range`}
              className="relative z-10 my-auto max-h-[78%] w-full object-contain drop-shadow-[0_14px_14px_rgba(57,32,17,0.22)] animate-hero-page-turn"
            />

            {/* Prominent Red Category Badge */}
            <span className="relative z-20 self-start rounded-full bg-[#d60e1e] px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.12em] text-white shadow-md">
              {activeCategory}
            </span>
          </div>

          {/* Right Product Swiper with Navigation Arrows in Marked Places */}
          <div className="relative min-w-0">
            {/* Left Arrow Mark (Marked Place: In gap between main card and swiper) */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-3.5 sm:-left-4 top-1/2 z-30 flex h-8 w-8 sm:h-9 sm:w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#282321] shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition duration-200 hover:border-[#d60e1e] hover:bg-[#d60e1e] hover:text-white cursor-pointer"
              aria-label="Previous product"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {/* Right Arrow Mark (Marked Place: On right edge of swiper) */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-3.5 sm:-right-4 top-1/2 z-30 flex h-8 w-8 sm:h-9 sm:w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#282321] shadow-[0_4px_14px_rgba(0,0,0,0.14)] transition duration-200 hover:border-[#d60e1e] hover:bg-[#d60e1e] hover:text-white cursor-pointer"
              aria-label="Next product"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>

            {/* 3-Card Swiper with Category Name on Top of Card */}
            <div className="overflow-hidden -my-2.5 py-2.5 px-1">
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
                className="home-gallery-swiper !py-2.5"
              >
                {productData.map((product, index) => (
                  <SwiperSlide key={`${product.product_id}-${index}`} className="h-auto">
                    <Link
                      to={`/products/${product.product_id}`}
                      className="group relative flex h-[260px] sm:h-[275px] lg:h-[285px] flex-col items-center justify-center overflow-hidden rounded-lg border border-[#eadfd6] bg-[linear-gradient(160deg,#ffffff_0%,#fff7f1_55%,#fdeedf_100%)] p-3 shadow-[0_6px_20px_rgba(62,35,17,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_14px_30px_rgba(62,35,17,0.1)]"
                      aria-label={product.product_name}
                    >
                      {/* Subtle ambient light glow behind product */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-24 w-32 rounded-full bg-[#fcdbc3]/60 blur-xl transition duration-500 group-hover:scale-125" />

                      {/* Top Card Badges: Category Name (e.g. Paint Thinner) on Left, Quantity on Right */}
                      <div className="absolute left-3 right-3 top-3 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
                        <span className="rounded-full border border-[#f3b58e] bg-white/95 px-2.5 py-0.5 text-[0.58rem] font-extrabold uppercase tracking-[0.06em] text-[#d60e1e] shadow-sm">
                          {product.category}
                        </span>
                        <span className="rounded-full border border-[#e5ded7] bg-white/95 px-2 py-0.5 text-[0.55rem] font-bold text-[#625953] shadow-sm">
                          {product.quantity}
                        </span>
                      </div>

                      {/* Product Image */}
                      <img
                        src={product.image}
                        alt={product.product_name}
                        className="relative z-10 max-h-[80%] w-full object-contain pt-4 drop-shadow-[0_10px_8px_rgba(57,32,17,0.14)] transition duration-500 group-hover:scale-110"
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
