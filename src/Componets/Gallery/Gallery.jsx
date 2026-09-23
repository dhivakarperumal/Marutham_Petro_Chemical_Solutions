import { useMemo, useState } from "react";
import { ArrowRight, Eye, X } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../../CommonComponents/PageHeader";
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Group products by category in order
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

  return (
    <div className="bg-[#fffaf6] text-[#1c1c1c]">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition hover:bg-[#d60e1e] hover:text-white cursor-pointer"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
            <div className="flex max-h-[75vh] w-full items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-base font-extrabold text-[#282321]">{selectedImage.title}</h4>
              <span className="text-xs font-semibold text-[#8b827b]">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

      <PageHeader title="Gallery" />

      <div className="mx-auto max-w-[1380px] px-4 py-12 md:px-6 lg:px-8 sm:py-16">
        {/* Category Navigation Filter Pills */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
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

        {/* Stacked Category Blocks: Center Main Range Image + Surrounding Products */}
        <div className="space-y-20 sm:space-y-24">
          {displayedCategories.map(({ category, mainImage, subtitle, products }) => {
            const leftProducts = products.slice(0, 2);
            const rightProducts = products.slice(2);
            const isFiveItems = rightProducts.length === 3;

            return (
              <section key={category} className="border-b border-[#ebdcd0] pb-16 last:border-b-0 last:pb-0">
                {/* Category Header */}
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <div>
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-[#d94c16]">
                      {category} Collection
                    </span>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#282321]">
                      {category}
                    </h3>
                    <p className="mt-1 max-w-[650px] text-sm text-[#766e68]">{subtitle}</p>
                  </div>
                  <Link
                    to={`/products?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d60e1e] hover:text-[#b90c19] transition self-start sm:self-auto"
                  >
                    View products <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>

                {/* Symmetrical Center-Main Showcase Layout */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1.4fr_1.3fr] lg:items-stretch">
                  {/* LEFT WING: First 2 individual product bottles */}
                  <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-1">
                    {leftProducts.map((product) => (
                      <div
                        key={product.product_id}
                        className="group relative flex h-[190px] sm:h-[200px] flex-col items-center justify-center overflow-hidden rounded-xl border border-[#eadfd6] bg-[linear-gradient(160deg,#ffffff_0%,#fff7f1_55%,#fdeedf_100%)] p-3 shadow-[0_4px_16px_rgba(62,35,17,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_12px_26px_rgba(62,35,17,0.08)]"
                      >
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-20 w-28 rounded-full bg-[#fcdbc3]/60 blur-xl transition duration-500 group-hover:scale-125" />
                        
                        <span className="absolute left-3 top-3 z-20 rounded-full border border-[#f3b58e] bg-white/95 px-2.5 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.06em] text-[#d60e1e] shadow-sm">
                          {product.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => setSelectedImage({ image: product.image, title: product.product_name, category: product.category })}
                          className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm opacity-0 transition group-hover:opacity-100 hover:text-[#d60e1e] cursor-pointer"
                          aria-label="Preview full size"
                        >
                          <Eye size={13} />
                        </button>

                        <img
                          src={product.image}
                          alt={product.product_name}
                          className="relative z-10 max-h-[82%] w-full object-contain pt-2 drop-shadow-[0_8px_6px_rgba(57,32,17,0.14)] transition duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* CENTER: Featured Main Category Group Image */}
                  <div
                    onClick={() => setSelectedImage({ image: mainImage, title: `${category} Full Range`, category })}
                    className="group relative flex h-[300px] sm:h-[360px] lg:h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border-2 border-[#e96512]/45 bg-[linear-gradient(150deg,#fff4eb_0%,#fcd9c0_55%,#f7bea0_100%)] p-5 shadow-[0_16px_36px_rgba(233,101,18,0.14)] ring-4 ring-[#e96512]/10 cursor-pointer"
                  >
                    <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-[#e96512]/30 blur-2xl" />

                    {/* Featured Top Tag */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#282321] px-2.5 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e96512] animate-pulse" /> Range Overview
                      </span>
                      <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[0.55rem] font-bold text-[#625953] backdrop-blur-xs">
                        {products.length} Sizes
                      </span>
                    </div>

                    {/* Main Category Image in Center */}
                    <img
                      src={mainImage}
                      alt={`${category} main range`}
                      className="relative z-10 my-auto max-h-[76%] w-full object-contain drop-shadow-[0_16px_16px_rgba(57,32,17,0.22)] transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Prominent Bottom Category Badge */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="inline-block rounded-full bg-[#d60e1e] px-3.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white shadow-md">
                        {category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[0.7rem] font-extrabold text-[#766e68] group-hover:text-[#d60e1e] transition">
                        <Eye size={13} /> Click to enlarge
                      </span>
                    </div>
                  </div>

                  {/* RIGHT WING: Remaining 2 or 3 individual product bottles */}
                  <div className={`grid gap-3.5 ${isFiveItems ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-1"}`}>
                    {rightProducts.map((product, idx) => {
                      const isLastSpanning = isFiveItems && idx === 2;
                      return (
                        <div
                          key={product.product_id}
                          className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#eadfd6] bg-[linear-gradient(160deg,#ffffff_0%,#fff7f1_55%,#fdeedf_100%)] p-3 shadow-[0_4px_16px_rgba(62,35,17,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_12px_24px_rgba(62,35,17,0.08)] ${
                            isLastSpanning ? "col-span-2 h-[190px] sm:h-[200px]" : "h-[190px] sm:h-[200px]"
                          }`}
                        >
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-20 w-28 rounded-full bg-[#fcdbc3]/60 blur-xl transition duration-500 group-hover:scale-125" />
                          
                          <span className="absolute left-3 top-3 z-20 rounded-full border border-[#f3b58e] bg-white/95 px-2.5 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.06em] text-[#d60e1e] shadow-sm">
                            {product.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => setSelectedImage({ image: product.image, title: product.product_name, category: product.category })}
                            className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm opacity-0 transition group-hover:opacity-100 hover:text-[#d60e1e] cursor-pointer"
                            aria-label="Preview full size"
                          >
                            <Eye size={13} />
                          </button>

                          <img
                            src={product.image}
                            alt={product.product_name}
                            className="relative z-10 max-h-[82%] w-full object-contain pt-2 drop-shadow-[0_8px_6px_rgba(57,32,17,0.14)] transition duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
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
