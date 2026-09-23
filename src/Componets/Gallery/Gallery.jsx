import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../CommonComponents/PageHeader";
import ModalPortal from "../../CommonComponents/ModalPortal";
import productData from "../../data/product.json";

const categoryImages = {
  "Enamel Thinner": "/images/gallery/img_1.png",
  "Paint Thinner": "/images/gallery/img_2.png",
  "Solvent Thinner": "/images/gallery/img_3.png",
  "NC Thinner": "/images/gallery/img_4.png",
};

const categorySubtitles = {
  "Enamel Thinner": "Superior flow, gloss leveling, and clean thinning for enamel paints and coatings",
  "Paint Thinner": "Quick-drying Zebra formulation engineered for smooth, uniform spray finishes",
  "Solvent Thinner": "Heavy-duty Eagle formula for industrial thinning, degreasing, and equipment cleaning",
  "NC Thinner": "High-clarity, fast-evaporation formula for automotive and furniture lacquers",
};

const categories = ["Enamel Thinner", "Paint Thinner", "Solvent Thinner", "NC Thinner"];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categoriesData = useMemo(() => {
    return categories.map((cat) => ({
      category: cat,
      mainImage: categoryImages[cat],
      subtitle: categorySubtitles[cat],
      products: productData.filter((p) => p.category === cat),
    }));
  }, []);

  const displayedCategories = useMemo(() => {
    if (activeFilter === "All") return categoriesData;
    return categoriesData.filter((cat) => cat.category === activeFilter);
  }, [activeFilter, categoriesData]);

  // Flattened ordered list of all gallery images for Next/Prev navigation
  const allGalleryImages = useMemo(() => {
    const list = [];
    displayedCategories.forEach(({ category, mainImage, products }) => {
      // 1. Main Category Hero Range image
      list.push({
        id: `${category}-hero`,
        image: mainImage,
        title: `${category} Full Range`,
        category,
        badge: "Main Range",
      });

      // 2. 4500ml container
      const p4500 = products.find((p) => p.quantity.includes("4500ml")) || products[products.length - 1];
      if (p4500) {
        list.push({
          id: p4500.product_id,
          image: p4500.image,
          title: p4500.product_name,
          category,
          badge: p4500.quantity,
        });
      }

      // 3. Bottom row products
      const p450 = products.find((p) => p.quantity.includes("450ml"));
      const p900 = products.find((p) => p.quantity.includes("900ml"));
      const p1800 = products.find((p) => p.quantity.includes("1800ml"));
      const p2700 = products.find((p) => p.quantity.includes("2700ml"));
      const bottom = [p450, p900, p1800, p2700].filter(Boolean);

      bottom.forEach((p) => {
        list.push({
          id: p.product_id,
          image: p.image,
          title: p.product_name,
          category,
          badge: p.quantity,
        });
      });
    });
    return list;
  }, [displayedCategories]);

  const currentImage = selectedIndex !== null ? allGalleryImages[selectedIndex] : null;

  const openViewer = (id) => {
    const idx = allGalleryImages.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (selectedIndex === null || allGalleryImages.length === 0) return;
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : allGalleryImages.length - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex === null || allGalleryImages.length === 0) return;
    setSelectedIndex((prev) => (prev < allGalleryImages.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, allGalleryImages.length]);

  return (
    <div className="bg-[#fffaf6] text-[#1c1c1c] overflow-x-hidden">
      {/* Lightbox Modal with Next / Prev Navigation */}
      {currentImage && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col items-center justify-between overflow-hidden rounded-2xl bg-white p-4 sm:p-6 shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Header */}
              <div className="flex w-full items-center justify-between border-b border-[#f0e7df] pb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="rounded-full bg-[#e96512]/10 px-3 py-1 text-xs font-extrabold text-[#e96512]">
                    {currentImage.category}
                  </span>
                  {currentImage.badge && (
                    <span className="rounded-full border border-[#f3b58e] bg-[#fff8f2] px-2.5 py-0.5 text-[0.68rem] font-bold text-[#d60e1e]">
                      {currentImage.badge}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-[#8b827b]">
                    {selectedIndex + 1} of {allGalleryImages.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition hover:bg-[#d60e1e] hover:text-white cursor-pointer"
                  aria-label="Close image preview"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Stage with Image & Next/Prev Controls */}
              <div className="relative my-2 flex h-[58vh] sm:h-[68vh] w-full items-center justify-center">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-1 sm:left-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-xl border border-[#ebdcd0] transition hover:bg-[#e96512] hover:text-white hover:border-[#e96512] hover:scale-105 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                {/* Main Preview Image */}
                <div className="flex h-full w-full items-center justify-center px-10 sm:px-16">
                  <img
                    key={currentImage.id}
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_12px_24px_rgba(40,35,33,0.18)] transition-all duration-300"
                  />
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-1 sm:right-3 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-xl border border-[#ebdcd0] transition hover:bg-[#e96512] hover:text-white hover:border-[#e96512] hover:scale-105 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Image Details */}
              <div className="mt-2 text-center">
                <h4 className="text-base sm:text-lg font-extrabold text-[#282321]">{currentImage.title}</h4>
                <span className="text-xs font-semibold text-[#8b827b]">{currentImage.category}</span>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}

      <PageHeader title="Gallery" />

      <div className="mx-auto max-w-[1380px] px-4 py-12 md:px-6 lg:px-8 sm:py-16">
        {/* Category Navigation Filter Pills */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-2.5" data-aos="fade-down">
          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className={`rounded-full px-5 py-2 text-xs font-extrabold transition cursor-pointer ${
              activeFilter === "All"
                ? "bg-[#d60e1e] text-white shadow-md shadow-[#d60e1e]/20"
                : "border border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-xs font-extrabold transition cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#d60e1e] text-white shadow-md shadow-[#d60e1e]/20"
                  : "border border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stacked Mosaic Collage Layout for Each Category */}
        <div className="space-y-24 sm:space-y-28">
          {displayedCategories.map(({ category, mainImage, subtitle, products }) => {
            // Top row: Main Range Hero + 4500ml pack (equal 50% width share)
            // Bottom row: 450ml, 900ml, 1800ml, 2700ml (equal width share)
            const p4500 = products.find((p) => p.quantity.includes("4500ml")) || products[products.length - 1];
            const p450 = products.find((p) => p.quantity.includes("450ml"));
            const p900 = products.find((p) => p.quantity.includes("900ml"));
            const p1800 = products.find((p) => p.quantity.includes("1800ml"));
            const p2700 = products.find((p) => p.quantity.includes("2700ml"));
            const bottomProducts = [p450, p900, p1800, p2700].filter(Boolean);

            return (
              <section key={category} className="border-b border-[#ebdcd0] pb-20 last:border-b-0 last:pb-0">
                {/* Category Header */}
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div data-aos="fade-right">
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
                       Collection Showcase
                    </span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#282321]">
                      {category}
                    </h2>
                    <p className="mt-1 max-w-[650px] text-sm text-[#766e68]">{subtitle}</p>
                  </div>
                  <Link
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d60e1e] hover:text-[#b90c19] transition self-start sm:self-auto"
                    data-aos="fade-left"
                  >
                    View products <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>

                {/* Collage Container with Overlapping Center Title Badge */}
                <div className="relative">
                  {/* Central Overlapping Floating Title Badge with Orange Theme */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none w-max max-w-[calc(100%-32px)] sm:max-w-none sm:w-auto" data-aos="zoom-in" data-aos-delay="150">
                    <div className="border-2 border-[#e96512] bg-white/95 backdrop-blur-sm px-4 py-2 sm:px-11 sm:py-4 shadow-[0_12px_36px_rgba(233,101,18,0.2)] rounded-lg text-center ring-2 sm:ring-4 ring-[#e96512]/15">
                      <span className="block text-[0.52rem] sm:text-[0.65rem] font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#e96512]">
                        Visual Collection
                      </span>
                      <h3 className="mt-0.5 text-xs sm:text-lg lg:text-xl font-extrabold uppercase tracking-[0.08em] sm:tracking-[0.22em] text-[#e96512] font-serif leading-tight">
                        {category} Gallery
                      </h3>
                    </div>
                  </div>

                  {/* Mosaic Images Grid */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* TOP ROW: 2 Images sharing equal width (50% / 50%) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Top-Left: Main Category Range Image */}
                      <div
                        onClick={() => openViewer(`${category}-hero`)}
                        className="group relative h-[260px] sm:h-[340px] lg:h-[390px] flex items-center justify-center overflow-hidden rounded-xl border border-[#eadfd6] bg-[linear-gradient(150deg,#fff5ec_0%,#fcdbc2_55%,#f7bea0_100%)] p-5 shadow-[0_6px_20px_rgba(62,35,17,0.06)] cursor-pointer transition duration-300 hover:shadow-xl hover:border-[#f3b58e]"
                        data-aos="fade-right"
                        data-aos-delay="80"
                      >
                        <div className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-[#e96512]/25 blur-2xl" />
                        <span className="absolute left-3.5 top-3.5 z-20 rounded-full bg-[#282321] px-2.5 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
                          Main Range
                        </span>
                        <span className="absolute right-3.5 top-3.5 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm opacity-0 transition group-hover:opacity-100 hover:text-[#d60e1e]">
                          <Eye size={13} />
                        </span>
                        <img
                          src={mainImage}
                          alt={`${category} main range`}
                          className="relative z-10 max-h-[85%] w-full object-contain drop-shadow-[0_16px_16px_rgba(57,32,17,0.22)] transition duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Top-Right: 4500ml container (equal 50% width) */}
                      {p4500 && (
                        <div
                          onClick={() => openViewer(p4500.product_id)}
                          className="group relative h-[260px] sm:h-[340px] lg:h-[390px] flex items-center justify-center overflow-hidden rounded-xl border border-[#eadfd6] bg-[linear-gradient(160deg,#ffffff_0%,#fff8f2_55%,#fdeedf_100%)] p-5 shadow-[0_6px_20px_rgba(62,35,17,0.05)] cursor-pointer transition duration-300 hover:shadow-xl hover:border-[#f3b58e]"
                          data-aos="fade-left"
                          data-aos-delay="80"
                        >
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-28 w-36 rounded-full bg-[#fcdbc3]/60 blur-xl" />
                          <span className="absolute left-3.5 top-3.5 z-20 rounded-full border border-[#f3b58e] bg-white/95 px-2.5 py-0.5 text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-[#d60e1e] shadow-sm">
                            {p4500.quantity}
                          </span>
                          <span className="absolute right-3.5 top-3.5 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm opacity-0 transition group-hover:opacity-100 hover:text-[#d60e1e]">
                            <Eye size={13} />
                          </span>
                          <img
                            src={p4500.image}
                            alt={p4500.product_name}
                            className="relative z-10 max-h-[82%] w-full object-contain drop-shadow-[0_12px_12px_rgba(57,32,17,0.16)] transition duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    {/* BOTTOM ROW: All bottom images sharing equal width */}
                    <div
                      className={`grid gap-3 sm:gap-4 ${
                        bottomProducts.length === 4
                          ? "grid-cols-2 sm:grid-cols-4"
                          : "grid-cols-1 sm:grid-cols-3"
                      }`}
                    >
                      {bottomProducts.map((p, pIdx) => (
                        <div
                          key={p.product_id}
                          onClick={() => openViewer(p.product_id)}
                          className="group relative h-[210px] sm:h-[280px] lg:h-[330px] flex items-center justify-center overflow-hidden rounded-xl border border-[#eadfd6] bg-[linear-gradient(160deg,#ffffff_0%,#fff7f1_55%,#fdeedf_100%)] p-3 sm:p-4 shadow-[0_4px_16px_rgba(62,35,17,0.04)] cursor-pointer transition duration-300 hover:shadow-xl hover:border-[#f3b58e]"
                          data-aos="zoom-in-up"
                          data-aos-delay={pIdx * 80}
                        >
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-20 w-28 rounded-full bg-[#fcdbc3]/60 blur-xl" />
                          <span className="absolute left-3 top-3 z-20 rounded-full border border-[#f3b58e] bg-white/95 px-2.5 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.08em] text-[#d60e1e] shadow-sm">
                            {p.quantity}
                          </span>
                          <span className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm opacity-0 transition group-hover:opacity-100 hover:text-[#d60e1e]">
                            <Eye size={13} />
                          </span>
                          <img
                            src={p.image}
                            alt={p.product_name}
                            className="relative z-10 max-h-[80%] w-full object-contain drop-shadow-[0_8px_8px_rgba(57,32,17,0.14)] transition duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
