import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../../CommonComponents/PageHeader";
import brandData from "../../data/brand.json";
import productData from "../../data/product.json";
import ProductCard from "../Products/ProductCard";

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const BrandDetails = () => {
  const { brandSlug } = useParams();
  const brand = brandData.find((item) => slugify(item.name) === brandSlug) || brandData[0];
  const relatedProducts = productData.filter((product) => product.category === brand.category);

  return (
    <main className="bg-[#fffaf6]">
      <PageHeader title={brand.name} />
      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#fffaf4_0%,#fff_52%,#fff1e6_100%)] px-[5%] py-16 sm:py-24">
        <div className="absolute -right-28 -top-36 h-[420px] w-[420px] rounded-full border border-[#e9651221]" />
        <div className="relative mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-10 bg-[#e96512]" /> Brand details
            </div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#a0968e]">{brand.code} · {brand.category}</p>
            <h1 className="max-w-[700px] text-[clamp(2.8rem,6vw,5.8rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">
              {brand.name.split(" ").slice(0, -1).join(" ")} <span className="text-[#d60e1e]">{brand.name.split(" ").at(-1)}</span>
            </h1>
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-[#766e68]">{brand.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#applications" className="inline-flex items-center gap-2 rounded-sm bg-[#d60e1e] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(214,14,30,0.2)] transition hover:bg-[#b90c19]">
                Explore applications <ArrowRight size={17} aria-hidden="true" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-[#e4d9d0] bg-white px-5 py-3.5 text-sm font-extrabold text-[#332e2b] transition hover:border-[#e96512] hover:text-[#d60e1e]">
                Request a quote <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[390px] w-full max-w-[500px] items-center justify-center">
            <div className="absolute h-[78%] w-[78%] rounded-full bg-[#f8c99c]/60 blur-3xl" />
            <div className="absolute inset-x-[8%] inset-y-[5%] rotate-2 rounded-[4px] border-[10px] border-white bg-[#fdf0e6] shadow-[20px_22px_0_#f8d9be,0_24px_50px_rgba(55,36,22,0.16)]" />
            <img src={brand.image} alt={`${brand.name} product`} className="relative z-10 max-h-[360px] max-w-[82%] object-contain drop-shadow-[0_20px_15px_rgba(57,32,17,0.2)]" />
            <span className="absolute bottom-2 left-0 z-20 rounded-sm bg-white px-4 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#e96512] shadow-[0_12px_28px_rgba(55,36,22,0.12)]">{brand.available_sizes.length} pack sizes available</span>
          </div>
        </div>
      </section>

      <section id="applications" className="px-[5%] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-9 bg-[#e96512]" /> Why choose it
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.04em] text-[#282321]">Made for better <span className="text-[#d60e1e]">work.</span></h2>
            <p className="mt-5 max-w-[450px] leading-7 text-[#766e68]">A professional solution with practical performance across everyday painting and coating requirements.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {brand.available_sizes.map((size) => <span key={size} className="rounded-full border border-[#eadfd6] bg-white px-4 py-2 text-xs font-bold text-[#766e68]">{size}</span>)}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {brand.applications.map((application) => (
              <div key={application} className="flex items-start gap-3 rounded-sm border border-[#eee3da] bg-white p-5 shadow-[0_8px_24px_rgba(62,35,17,0.04)]">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#e96512]" aria-hidden="true" />
                <span className="text-sm font-bold leading-6 text-[#4f4843]">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#eee3da] bg-white px-[5%] py-16 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#d94c16]">Available products</p>
              <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-[#282321]">Choose your pack size</h2>
            </div>
            <Link to="/products" className="hidden items-center gap-1 text-sm font-extrabold text-[#d60e1e] sm:flex">View all products <ChevronRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((product) => <ProductCard key={product.product_id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-16">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck size={23} className="text-[#e96512]" aria-hidden="true" />
            <h2 className="text-2xl font-extrabold text-[#282321]">Safety and handling</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brand.safety_precautions.map((precaution) => (
              <div key={precaution.title} className="rounded-sm border border-[#eee3da] bg-white p-5">
                <h3 className="font-extrabold text-[#332e2b]">{precaution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#766e68]">{precaution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandDetails;