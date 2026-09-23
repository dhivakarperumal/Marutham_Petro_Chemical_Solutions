import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
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

const categories = [...new Set(productData.map((product) => product.category))];

const HomeGallery = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const activeCategory = categories[categoryIndex];
  const categoryProducts = useMemo(
    () => productData.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  // Buffer slides to guarantee continuous seamless infinite marquee without stutter
  const swiperProducts = useMemo(() => {
    if (!categoryProducts.length) return [];
    let list = [...categoryProducts];
    while (list.length < 16) {
      list = [...list, ...categoryProducts];
    }
    return list;
  }, [categoryProducts]);

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
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                onClick={() => setCategoryIndex(index)}
                className={`rounded-full border px-3 py-1.5 text-[0.68rem] font-extrabold transition cursor-pointer ${
                  index === categoryIndex
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

        {/* Gallery Content: Left Static Image with Small Gap + Right Continuous Swiper */}
        <div className="grid items-stretch gap-3 sm:gap-4 lg:grid-cols-[250px_1fr] xl:grid-cols-[270px_1fr]">
          {/* Left Static Category Image (Compact Height & Width) */}
          <div className="relative flex h-[270px] sm:h-[290px] lg:h-[300px] flex-col overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 shadow-[0_12px_28px_rgba(62,35,17,0.06)]">
            <div className="absolute -bottom-12 right-4 h-32 w-32 rounded-full bg-[#f5c59d80] blur-2xl" />
            <img
              key={activeCategory}
              src={categoryImages[activeCategory]}
              alt={`${activeCategory} main range`}
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_12px_12px_rgba(57,32,17,0.18)] animate-hero-page-turn"
            />
            <span className="absolute bottom-3 left-3 z-20 rounded-full bg-white/95 px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-[#d60e1e] shadow-sm">
              {activeCategory}
            </span>
          </div>

          {/* Right Continuous Swiper (Starts aligned with left image, no sub-header) */}
          <div className="min-w-0">
            <div className="overflow-hidden">
              <Swiper
                key={activeCategory}
                modules={[Autoplay]}
                loop={true}
                speed={4500}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={12}
                slidesPerView={1.3}
                breakpoints={{
                  480: { slidesPerView: 1.7, spaceBetween: 12 },
                  640: { slidesPerView: 2.3, spaceBetween: 14 },
                  1024: { slidesPerView: 2.8, spaceBetween: 14 },
                  1280: { slidesPerView: 3.3, spaceBetween: 16 },
                }}
                className="home-gallery-swiper"
              >
                {swiperProducts.map((product, index) => (
                  <SwiperSlide key={`${product.product_id}-gallery-${index}`} className="h-auto">
                    <Link
                      to={`/products/${product.product_id}`}
                      className="group flex h-[270px] sm:h-[290px] lg:h-[300px] flex-col overflow-hidden rounded-md border border-[#eadfd6] bg-[#fffaf6] shadow-[0_8px_20px_rgba(62,35,17,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_14px_26px_rgba(62,35,17,0.1)]"
                    >
                      <div className="relative flex h-[175px] sm:h-[195px] lg:h-[205px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-2.5">
                        <span className="absolute left-2.5 top-2.5 rounded-full border border-[#f3b58e] bg-white/95 px-2 py-0.5 text-[0.52rem] font-extrabold uppercase tracking-[0.08em] text-[#d60e1e] shadow-sm">
                          {product.quantity}
                        </span>
                        <img
                          src={product.image}
                          alt={product.product_name}
                          className="h-full w-full object-contain drop-shadow-[0_10px_8px_rgba(57,32,17,0.14)] transition duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-center border-t border-[#f4eae2] bg-white p-2.5 text-center">
                        <span className="block truncate text-xs sm:text-[0.82rem] font-extrabold text-[#282321] transition group-hover:text-[#d60e1e]">
                          {product.product_name}
                        </span>
                        <span className="mt-0.5 block text-[0.68rem] font-semibold text-[#8b827b]">
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
