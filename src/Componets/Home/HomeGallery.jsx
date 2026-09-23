import { useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import productData from "../../data/product.json";
import "swiper/css";
import "swiper/css/navigation";

const categoryImages = {
  "Enamel Thinner": "/images/gallery/img_1.png",
  "Paint Thinner": "/images/gallery/img_2.png",
  "Solvent Thinner": "/images/gallery/img_3.png",
  "NC Thinner": "/images/gallery/img_4.png",
};

const categories = [...new Set(productData.map((product) => product.category))];

const HomeGallery = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const activeCategory = categories[categoryIndex];
  const categoryProducts = useMemo(
    () => productData.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  // Buffer slides to guarantee seamless infinite loop without stutter
  const swiperProducts = useMemo(() => {
    if (!categoryProducts.length) return [];
    let list = [...categoryProducts];
    while (list.length < 12) {
      list = [...list, ...categoryProducts];
    }
    return list;
  }, [categoryProducts]);

  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-20 sm:py-24" aria-labelledby="home-gallery-title">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f8c99c35] blur-3xl" />
      <div className="relative mx-auto max-w-[1380px]">
        {/* Gallery Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-10 bg-[#e96512]" /> Product Gallery Showcase
            </div>
            <h2 id="home-gallery-title" className="max-w-[700px] text-[clamp(2.3rem,4.5vw,4.5rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-[#282321]">
              Visual Showcase. <span className="text-[#d60e1e]">Product Gallery.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                onClick={() => setCategoryIndex(index)}
                className={`rounded-full border px-3 py-2 text-[0.68rem] font-extrabold transition cursor-pointer ${
                  index === categoryIndex
                    ? "border-[#d60e1e] bg-[#d60e1e] text-white shadow-md shadow-[#d60e1e]/20"
                    : "border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Content: Left Static Image with Small Gap + Right Product Swiper */}
        <div className="grid items-center gap-4 sm:gap-6 lg:grid-cols-[280px_1fr] xl:grid-cols-[310px_1fr]">
          {/* Left Static Category Image (Takes Small Space) */}
          <div className="relative h-[320px] overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-4 shadow-[0_16px_36px_rgba(62,35,17,0.08)] sm:h-[380px] lg:h-[400px]">
            <div className="absolute -bottom-16 right-6 h-40 w-40 rounded-full bg-[#f5c59d80] blur-3xl" />
            <img
              key={activeCategory}
              src={categoryImages[activeCategory]}
              alt={`${activeCategory} main range`}
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_16px_14px_rgba(57,32,17,0.2)] animate-hero-page-turn"
            />
            <span className="absolute bottom-4 left-4 z-20 rounded-full bg-white px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#d60e1e] shadow-md">
              {activeCategory}
            </span>
          </div>

          {/* Right Product Swiper (Continuous Infinite Loop) */}
          <div className="min-w-0">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#d94c16]">
                  Gallery Showcase • {activeCategory}
                </span>
                <h3 className="mt-1 text-xl font-extrabold text-[#282321] sm:text-2xl">
                  {activeCategory} Range
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-[#d60e1e] hover:text-[#b90c19] transition"
                >
                  View full gallery <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    className="home-gallery-prev flex h-8 w-8 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#766e68] shadow-sm transition hover:border-[#d60e1e] hover:text-[#d60e1e] cursor-pointer"
                    aria-label="Previous gallery product"
                  >
                    <ChevronLeft size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="home-gallery-next flex h-8 w-8 items-center justify-center rounded-full bg-[#d60e1e] text-white shadow-sm transition hover:bg-[#b90c19] cursor-pointer"
                    aria-label="Next gallery product"
                  >
                    <ChevronRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* Continuous Seamless Infinite Swiper */}
            <div className="overflow-hidden px-1 py-1">
              <Swiper
                key={activeCategory}
                modules={[Autoplay, Navigation]}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".home-gallery-prev",
                  nextEl: ".home-gallery-next",
                }}
                spaceBetween={14}
                slidesPerView={1.25}
                breakpoints={{
                  480: { slidesPerView: 1.6, spaceBetween: 14 },
                  640: { slidesPerView: 2.2, spaceBetween: 16 },
                  1024: { slidesPerView: 2.6, spaceBetween: 18 },
                  1280: { slidesPerView: 3.1, spaceBetween: 18 },
                }}
                className="home-gallery-swiper !py-2"
              >
                {swiperProducts.map((product, index) => (
                  <SwiperSlide key={`${product.product_id}-gallery-${index}`} className="h-auto">
                    <Link
                      to={`/products/${product.product_id}`}
                      className="group flex h-full flex-col overflow-hidden rounded-md border border-[#eadfd6] bg-[#fffaf6] shadow-[0_10px_24px_rgba(62,35,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_16px_30px_rgba(62,35,17,0.12)]"
                    >
                      <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-3 sm:h-[240px]">
                        <span className="absolute left-3 top-3 rounded-full border border-[#f3b58e] bg-white/95 px-2 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.08em] text-[#d60e1e] shadow-sm">
                          {product.quantity}
                        </span>
                        <img
                          src={product.image}
                          alt={product.product_name}
                          className="h-full w-full object-contain drop-shadow-[0_12px_10px_rgba(57,32,17,0.16)] transition duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between border-t border-[#f4eae2] bg-white p-3 text-center">
                        <span className="block truncate text-sm font-extrabold text-[#282321] transition group-hover:text-[#d60e1e]">
                          {product.product_name}
                        </span>
                        <span className="mt-1 block text-xs font-semibold text-[#8b827b]">
                          Pack: {product.quantity} · Min: {product.min_order_no} {product.unit}
                        </span>
                      </div>
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
