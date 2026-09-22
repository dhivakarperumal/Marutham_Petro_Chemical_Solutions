import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const brands = [
  { name: "Marutham", category: "Enamel Thinner & NC Thinner", image: "/images/gallery/img_1.png", slug: "marutham-thinner" },
  { name: "Zebra", category: "Paint Thinner", image: "/images/gallery/img_2.png", slug: "zebra-thinner" },
  { name: "Eagle", category: "Solvent Thinner", image: "/images/gallery/img_3.png", slug: "eagle-solvent-thinner" },
];

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
            <h2 id="home-brands-title" className="max-w-[520px] text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#282321]">
              Trusted brands. <span className="text-[#d60e1e]">Better finishes.</span>
            </h2>
          </div>
          {/* <p className="max-w-[360px] text-sm leading-6 text-[#766e68]">
            Explore the Marutham family of thinner solutions, made for professional and everyday work.
          </p> */}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/brands/${brand.slug}`}
              className="group relative min-w-0 overflow-hidden rounded-md border border-[#eadfd6] bg-white shadow-[0_12px_30px_rgba(62,35,17,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_20px_38px_rgba(62,35,17,0.12)]"
            >
              <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 sm:h-[360px] sm:p-5">
                <div className="absolute -bottom-16 left-1/2 h-36 w-52 -translate-x-1/2 rounded-full bg-[#f5c59d80] blur-3xl transition duration-500 group-hover:scale-125" />
                <img src={brand.image} alt={`${brand.name} products`} className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_16px_12px_rgba(57,32,17,0.16)] transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-center justify-between gap-2 p-3 sm:p-5">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-extrabold text-[#282321] transition group-hover:text-[#d60e1e] sm:text-xl">{brand.name}</h3>
                  <p className="mt-1 truncate text-xs font-semibold text-[#766e68] sm:text-sm">{brand.category}</p>
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
