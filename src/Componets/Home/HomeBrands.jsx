import { ArrowUpRight, Package } from "lucide-react";
import { Link } from "react-router-dom";
import brandData from "../../data/brand.json";

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const HomeBrands = () => {
  return (
    <section className="relative overflow-hidden bg-[#fffaf6] px-[5%] py-20 sm:py-24" aria-labelledby="home-brands-title">
      <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#f8c99c35] blur-3xl" />
      <div className="relative mx-auto max-w-[1380px]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-10 bg-[#e96512]" /> Our brands
            </div>
            <h2 id="home-brands-title" className="max-w-[650px] text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">
              The right product for every <span className="text-[#d60e1e]">finish.</span>
            </h2>
          </div>
          <p className="max-w-[360px] text-sm leading-6 text-[#766e68]">
            Explore the Marutham family of thinner solutions, made for professional and everyday work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brandData.map((brand, index) => (
            <Link
              key={brand.product_id}
              to={`/brands/${slugify(brand.name)}`}
              className={`group relative overflow-hidden rounded-md border border-[#eadfd6] bg-white shadow-[0_12px_30px_rgba(62,35,17,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_20px_38px_rgba(62,35,17,0.12)] ${index === 0 ? "md:col-span-2 xl:col-span-2" : ""}`}
            >
              <div className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-5 ${index === 0 ? "h-[290px] sm:h-[360px]" : "h-[250px]"}`}>
                <div className="absolute -bottom-16 left-1/2 h-36 w-52 -translate-x-1/2 rounded-full bg-[#f5c59d80] blur-3xl transition duration-500 group-hover:scale-125" />
                <img src={brand.image} alt={`${brand.name} products`} className="relative z-10 h-full w-full object-contain drop-shadow-[0_16px_12px_rgba(57,32,17,0.16)] transition duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full border border-[#f3b58e] bg-[#fff1eb] px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-[#b90c19]">{brand.code}</span>
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-[#766e68] shadow-sm"><Package size={12} aria-hidden="true" /> {brand.available_sizes.length} sizes</span>
              </div>
              <div className="flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="text-xl font-extrabold text-[#282321] transition group-hover:text-[#d60e1e]">{brand.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#766e68]">{brand.category}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eadfd6] text-[#d60e1e] transition group-hover:border-[#d60e1e] group-hover:bg-[#d60e1e] group-hover:text-white">
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
