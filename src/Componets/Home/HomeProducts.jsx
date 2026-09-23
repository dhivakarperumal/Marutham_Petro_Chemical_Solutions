import { useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import productData from "../../data/product.json";
import ProductCard from "../Products/ProductCard";
import "swiper/css";
import "swiper/css/navigation";

const categories = ["All products", ...new Set(productData.map((product) => product.category))];

const HomeProducts = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const visibleProducts = useMemo(
    () =>
      activeCategory === categories[0]
        ? productData
        : productData.filter((product) => product.category === activeCategory),
    [activeCategory]
  );

  // Ensure enough slides for seamless infinite loop when categories have few items
  const swiperProducts = useMemo(() => {
    if (!visibleProducts.length) return [];
    let list = [...visibleProducts];
    while (list.length < 12) {
      list = [...list, ...visibleProducts];
    }
    return list;
  }, [visibleProducts]);

  return (
    <section id="products" className="relative overflow-hidden bg-[#fffaf6] px-[5%] py-20 sm:py-24" aria-labelledby="home-products-title">
      <div className="mx-auto max-w-[1380px]">
        {/* Header with Title and Navigation */}
        <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-[620px]" data-aos="fade-right">
            <div className="mb-3 flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-9 bg-[#e96512]" /> Our product range
            </div>
            <h2 id="home-products-title" className="text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-none tracking-[-0.04em] text-[#282321]">
              Solutions for every <span className="text-[#d60e1e]">finish.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4" data-aos="fade-left">
            <a href="/products" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#d60e1e] transition hover:text-[#b90c19]">
              View all products <ArrowRight size={17} aria-hidden="true" />
            </a>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="home-products-prev flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfd6] bg-white text-[#766e68] shadow-sm transition hover:border-[#d60e1e] hover:text-[#d60e1e] cursor-pointer"
                aria-label="Previous products"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="home-products-next flex h-9 w-9 items-center justify-center rounded-full bg-[#d60e1e] text-white shadow-sm transition hover:bg-[#b90c19] cursor-pointer"
                aria-label="Next products"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-9 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Home product categories" data-aos="fade-up" data-aos-delay="80">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-extrabold transition cursor-pointer ${
                  isActive
                    ? "border-[#d60e1e] bg-[#d60e1e] text-white shadow-[0_8px_18px_rgba(214,14,30,0.18)]"
                    : "border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Seamless Infinite Swiper (Continues from first product upon reaching end) */}
        <div className="overflow-hidden px-1 py-1" aria-label="Automatic home product swiper" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            key={activeCategory}
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={750}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".home-products-prev",
              nextEl: ".home-products-next",
            }}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.15, spaceBetween: 20 },
              1024: { slidesPerView: 3.15, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="home-products-swiper !py-2"
          >
            {swiperProducts.map((product, idx) => (
              <SwiperSlide key={`${product.product_id}-home-${idx}`} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
