import { useMemo, useState } from "react";
import { ArrowRight, Boxes, Check, Filter, PackageCheck } from "lucide-react";
import productData from "../../data/product.json";

const categories = ["All products", ...new Set(productData.map((product) => product.category))];

const ProductCard = ({ product }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#eee3da] bg-white shadow-[0_10px_30px_rgba(62,35,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_18px_38px_rgba(62,35,17,0.12)]">
      <div className="relative flex h-[245px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fffaf6_0%,#fdf0e6_100%)] p-8">
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#d94c16] shadow-sm">
          {product.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-[#201f1f] px-2.5 py-1 text-[0.65rem] font-bold text-white">
          {product.quantity}
        </span>
        <div className="absolute -bottom-20 left-1/2 h-36 w-52 -translate-x-1/2 rounded-full bg-[#f5c59d]/50 blur-2xl transition duration-300 group-hover:scale-125" />
        <img
          src={product.image}
          alt={product.product_name}
          className="relative z-10 h-full w-full object-contain drop-shadow-[0_14px_10px_rgba(57,32,17,0.18)] transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#a0968e]">{product.brand}</span>
          <span className="text-[0.68rem] font-bold text-[#a0968e]">{product.product_id}</span>
        </div>
        <h3 className="min-h-[3.5rem] text-[1.28rem] font-extrabold leading-[1.08] text-[#282321]">{product.product_name}</h3>
        <p className="mt-3 line-clamp-3 text-[0.88rem] leading-[1.55] text-[#766e68]">{product.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-2 border-y border-[#eee3da] py-3">
          <div className="flex items-center gap-2">
            <PackageCheck size={17} className="shrink-0 text-[#e96512]" aria-hidden="true" />
            <div>
              <span className="block text-[0.62rem] font-bold uppercase tracking-wide text-[#a0968e]">Pack size</span>
              <strong className="text-sm text-[#332e2b]">{product.quantity}</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Boxes size={17} className="shrink-0 text-[#e96512]" aria-hidden="true" />
            <div>
              <span className="block text-[0.62rem] font-bold uppercase tracking-wide text-[#a0968e]">Bulk order</span>
              <strong className="text-sm text-[#332e2b]">{product.min_order_no} {product.unit}</strong>
            </div>
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-5">
          <a href={`/contact?product=${encodeURIComponent(product.product_id)}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#d60e1e] px-3 py-3 text-center text-xs font-extrabold text-white transition hover:bg-[#b90c19]">
            Request quote <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a href={`/contact?product=${encodeURIComponent(product.product_id)}`} aria-label={`Get details for ${product.product_name}`} className="inline-flex items-center justify-center rounded-sm border border-[#eadfd6] px-3 text-[#d60e1e] transition hover:bg-[#fff4eb]">
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const visibleProducts = useMemo(
    () => activeCategory === categories[0]
      ? productData
      : productData.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="products" className="relative overflow-hidden bg-[#fffaf6] px-[5%] py-20 sm:py-24" aria-labelledby="products-title">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-[620px]">
            <div className="mb-3 flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-9 bg-[#e96512]" /> Our product range
            </div>
            <h2 id="products-title" className="text-[clamp(2.3rem,4vw,4.2rem)] font-extrabold leading-none tracking-[-0.04em] text-[#282321]">
              Solutions for every <span className="text-[#d60e1e]">finish.</span>
            </h2>
            <p className="mt-4 max-w-[560px] text-base leading-7 text-[#766e68]">
              Professional thinner solutions in practical pack sizes for painting, coating, maintenance, and industrial work.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[#817a75]">
            <Filter size={17} className="text-[#e96512]" aria-hidden="true" />
            <span>{visibleProducts.length} products available</span>
          </div>
        </div>

        <div className="mb-9 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Product categories">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-extrabold transition ${isActive ? "border-[#d60e1e] bg-[#d60e1e] text-white shadow-[0_8px_18px_rgba(214,14,30,0.18)]" : "border-[#eadfd6] bg-white text-[#766e68] hover:border-[#e96512] hover:text-[#d60e1e]"}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product) => <ProductCard key={product.product_id} product={product} />)}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm font-bold text-[#766e68]">
          <Check size={17} className="text-[#e96512]" aria-hidden="true" /> Bulk supply available for commercial and industrial requirements.
        </div>
      </div>
    </section>
  );
};

export { ProductCard };
export default Products;