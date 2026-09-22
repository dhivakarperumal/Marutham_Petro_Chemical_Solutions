import { ArrowRight, CheckCircle2, Factory, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-20 sm:py-24" aria-labelledby="home-about-title">
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#f8c99c40] blur-3xl" />
      <div className="relative mx-auto grid max-w-[1380px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="relative min-h-[420px] overflow-hidden rounded-[6px] border border-[#eadfd6] bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-5 shadow-[0_20px_45px_rgba(62,35,17,0.08)] sm:min-h-[520px] sm:p-8">
          <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[#e9651250]" />
          <div className="absolute -bottom-16 right-8 h-48 w-48 rounded-full bg-[#f5c59d80] blur-3xl" />
          <img
            src="/images/about/about.png"
            alt="Marutham thinner products and solutions"
            className="relative z-10 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute bottom-7 left-7 z-20 flex items-center gap-3 bg-white px-4 py-3 shadow-[0_12px_28px_rgba(62,35,17,0.14)] sm:left-10">
            <Factory size={22} className="text-[#d60e1e]" aria-hidden="true" />
            <div>
              <strong className="block text-sm font-extrabold text-[#282321]">Made for real work</strong>
              <span className="text-xs font-semibold text-[#a0968e]">Reliable thinner solutions</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-[650px]">
          <div className="mb-4 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
            <span className="h-0.5 w-10 bg-[#e96512]" /> About Marutham
          </div>
          <h2 id="home-about-title" className="max-w-[620px] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">
            Consistency in every <span className="text-[#d60e1e]">finish.</span>
          </h2>
          <p className="mt-6 max-w-[590px] text-base leading-7 text-[#766e68]">
            Marutham Marketing manufactures and supplies dependable paint thinners, enamel thinners, solvents, and coating solutions for professionals and everyday projects.
          </p>
          <p className="mt-4 max-w-[590px] text-base leading-7 text-[#766e68]">
            We focus on practical performance, consistent quality, and reliable supply so every application starts with confidence.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 border-t border-[#eadfd6] pt-4">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#d60e1e]" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-extrabold text-[#282321]">Quality you can trust</h3>
                <p className="mt-1 text-sm leading-6 text-[#766e68]">Reliable performance across every batch.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-[#eadfd6] pt-4">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#e96512]" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-extrabold text-[#282321]">Built for better results</h3>
                <p className="mt-1 text-sm leading-6 text-[#766e68]">Solutions for painting and coating work.</p>
              </div>
            </div>
          </div>

          <Link to="/about" className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#d60e1e] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(214,14,30,0.18)] transition hover:bg-[#b90c19]">
            More about us <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
