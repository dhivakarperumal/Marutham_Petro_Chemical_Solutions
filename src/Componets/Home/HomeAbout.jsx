import { useEffect, useRef, useState } from "react";
import CountUpModule from "react-countup";
import { ArrowRight, BriefcaseBusiness, Factory, Store, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CountUpComponent = CountUpModule?.default || CountUpModule;

const VisibleCountUp = ({ end, suffix = "", duration = 2, className = "" }) => {
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {hasStarted ? <CountUpComponent end={end} duration={duration} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
};

const HomeAbout = () => {
  const statsRef = useRef(null);
  const [hasViewedStats, setHasViewedStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasViewedStats(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

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
            Marutham <span className="text-[#d60e1e]">Thinner</span>
          </h2>
          <p className="mt-6 max-w-[590px] text-base leading-7 text-[#766e68] text-justify">
            Marutham is a renowned and reliable name in the world of paint thinners and paint-related products, committed to delivering superior quality and exceptional performance. With a strong emphasis on innovation and customer satisfaction, Marutham has established itself as a leader in the industry, offering a range of products that cater to both professional painters and DIY enthusiasts.
          </p>

          <div ref={statsRef} className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="relative flex items-center gap-3 overflow-hidden rounded-sm border border-[#f2dfd0] bg-[linear-gradient(135deg,#fffaf6_0%,#fff1eb_100%)] px-3 py-3 shadow-[0_8px_20px_rgba(62,35,17,0.07)]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff1eb]">
                <Users size={16} className="text-[#d60e1e]" aria-hidden="true" />
              </div>
              <div>
                <strong className="block text-xl font-extrabold leading-none text-[#282321]">
                  <VisibleCountUp end={1200} duration={2} suffix="+" />
                </strong>
                <span className="mt-1 block text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-[#766e68]">Satsified Clients</span>
              </div>
            </div>
            <div className="relative flex items-center gap-3 overflow-hidden rounded-sm border border-[#f2dfd0] bg-[linear-gradient(135deg,#fffaf6_0%,#fff4eb_100%)] px-3 py-3 shadow-[0_8px_20px_rgba(62,35,17,0.07)]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff4eb]">
                <Store size={16} className="text-[#e96512]" aria-hidden="true" />
              </div>
              <div>
                <strong className="block text-xl font-extrabold leading-none text-[#282321]">
                  <VisibleCountUp end={100} duration={2} suffix="+" />
                </strong>
                <span className="mt-1 block text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-[#766e68]">Overall Dealers</span>
              </div>
            </div>
            <div className="relative flex items-center gap-3 overflow-hidden rounded-sm border border-[#f2dfd0] bg-[linear-gradient(135deg,#fffaf6_0%,#fff1eb_100%)] px-3 py-3 shadow-[0_8px_20px_rgba(62,35,17,0.07)]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff1eb]">
                <BriefcaseBusiness size={16} className="text-[#d60e1e]" aria-hidden="true" />
              </div>
              <div>
                <strong className="block text-xl font-extrabold leading-none text-[#282321]">
                  <VisibleCountUp end={10} duration={2} suffix="+" />
                </strong>
                <span className="mt-1 block text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-[#766e68]">Overall Experience</span>
              </div>
            </div>
          </div>

          <Link to="/about" className="mt-6 inline-flex items-center gap-3 rounded-sm bg-[#d60e1e] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(214,14,30,0.18)] transition hover:bg-[#b90c19]">
            More about us <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
