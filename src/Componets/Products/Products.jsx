import { useEffect, useMemo, useState } from "react";
import { Check, Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../../CommonComponents/PageHeader";
import productData from "../../data/product.json";
import ProductCard from "./ProductCard";

const categories = ["All products", ...new Set(productData.map((product) => product.category))];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory = categories.includes(requestedCategory) ? requestedCategory : categories[0];
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    setActiveCategory(categories.includes(requestedCategory) ? requestedCategory : categories[0]);
  }, [requestedCategory]);
  const visibleProducts = useMemo(
    () => activeCategory === categories[0]
      ? productData
      : productData.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHeader title="Products" />
      <section id="products" className="relative overflow-hidden bg-[#fffaf6] px-[5%] py-20 sm:py-24" aria-labelledby="products-title">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end" data-aos="fade-down">
          <div className="max-w-[620px]">
            <div className="mb-3 flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-9 bg-[#e96512]" /> Our product range
            </div>
            <h2 id="products-title" className="text-[clamp(1.75rem,3.8vw,4.2rem)] font-extrabold leading-[1.05] sm:leading-none tracking-[-0.04em] text-[#282321]">
              Solutions for every <span className="text-[#d60e1e]">finish.</span>
            </h2>
            {/* <p className="mt-4 max-w-[560px] text-base leading-7 text-[#766e68]">
              Professional thinner solutions in practical pack sizes for painting, coating, maintenance, and industrial work.
            </p> */}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[#817a75]">
            <Filter size={17} className="text-[#e96512]" aria-hidden="true" />
            <span>{visibleProducts.length} products available</span>
          </div>
        </div>

        <div className="mb-9 flex flex-wrap justify-center gap-2 sm:gap-2.5" role="tablist" aria-label="Product categories" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(category);
                  if (category === categories[0]) {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category });
                  }
                }}
                className={`cursor-pointer rounded-full border px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-extrabold transition ${isActive ? "border-[#d60e1e] bg-[#d60e1e] text-white shadow-[0_8px_18px_rgba(214,14,30,0.18)]" : "border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product, idx) => (
            <div
              key={product.product_id}
              data-aos="zoom-in-up"
              data-aos-delay={(idx % 4) * 80}
              className="h-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm font-bold text-[#766e68]" data-aos="fade-up" data-aos-delay="200">
          <Check size={17} className="text-[#e96512]" aria-hidden="true" /> Bulk supply available for commercial and industrial requirements.
        </div>
      </div>
      </section>
    </>
  );
};

export default Products;