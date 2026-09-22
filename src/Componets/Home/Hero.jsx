import { ArrowRight, CheckCircle2, Factory, PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[min(780px,calc(100vh-80px))] overflow-hidden bg-[linear-gradient(118deg,#fffaf4_0%,#fff_48%,#fff4eb_100%)] text-[#201f1f] after:absolute after:bottom-0 after:right-[8%] after:h-1 after:w-[32%] after:bg-[linear-gradient(90deg,#d60e1e,#e96512)] after:content-['']"
      aria-labelledby="hero-title"
    >
      <div className="absolute -right-[120px] -top-[180px] h-[520px] w-[520px] rounded-full border border-[#e9651221]" />

      <div className="relative z-10 mx-auto grid min-h-[min(780px,calc(100vh-80px))] w-[90%] max-w-[1380px] grid-cols-1 items-center gap-12 py-[74px] lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-[clamp(40px,7vw,112px)] lg:py-[72px_0_88px]">
        <div className="max-w-[680px] lg:max-w-[600px]">
          <div className="flex items-center gap-3 text-[0.73rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
            <span className="h-0.5 w-[38px] bg-[#e96512]" />
            <span>Petro Chemical Solutions</span>
          </div>

          <h1 id="hero-title" className="my-[22px] mb-6 max-w-[660px] text-[clamp(3.1rem,5.4vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#242323] max-[560px]:text-[clamp(2.65rem,13vw,4.3rem)]">
            Built for the work
            <span className="block text-[#d60e1e]">that keeps industry moving.</span>
          </h1>

          <p className="max-w-[510px] text-[1.08rem] leading-[1.7] text-[#6e6966] max-[560px]:text-base">
            Reliable industrial chemicals, thinner solutions, and expert support
            for businesses that cannot afford to slow down.
          </p>

          <div className="mt-[34px] flex flex-wrap gap-3.5 max-[560px]:flex-col max-[560px]:items-stretch">
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[4px] bg-[#d60e1e] px-[22px] text-[0.88rem] font-bold text-white shadow-[0_12px_25px_rgba(214,14,30,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b90c19] hover:shadow-[0_14px_30px_rgba(214,14,30,0.27)] max-[560px]:w-full" href="#products">
              Explore solutions <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[4px] border border-[#e4d9d0] px-[22px] text-[0.88rem] font-bold text-[#332e2b] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_20px_rgba(55,35,20,0.08)] max-[560px]:w-full" href="tel:+919876543210">
              <PhoneCall size={17} aria-hidden="true" /> Talk to an expert
            </a>
          </div>

          <div className="mt-16 flex gap-[30px] max-[560px]:mt-[46px] max-[560px]:justify-between max-[560px]:gap-2.5" aria-label="Company highlights">
            <div className="flex items-center gap-2.5 border-r border-[#e2d8d0] pr-7 max-[560px]:gap-1 max-[560px]:pr-2.5">
              <strong className="text-[1.45rem] leading-none text-[#d60e1e] max-[560px]:text-[1.1rem]">15+</strong>
              <span className="text-[0.7rem] font-bold uppercase leading-[1.25] text-[#817a75] max-[560px]:text-[0.57rem]">Years of<br />experience</span>
            </div>
            <div className="flex items-center gap-2.5 border-r border-[#e2d8d0] pr-7 max-[560px]:gap-1 max-[560px]:pr-2.5">
              <strong className="text-[1.45rem] leading-none text-[#d60e1e] max-[560px]:text-[1.1rem]">24 hr</strong>
              <span className="text-[0.7rem] font-bold uppercase leading-[1.25] text-[#817a75] max-[560px]:text-[0.57rem]">Fast dispatch<br />support</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#e96512] max-[560px]:gap-1">
              <CheckCircle2 size={22} aria-hidden="true" />
              <span className="text-[0.7rem] font-bold uppercase leading-[1.25] text-[#817a75] max-[560px]:text-[0.57rem]">Consistent<br />quality</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto min-h-[350px] w-full max-w-[650px] lg:min-h-[530px] lg:max-w-none">
          <div className="absolute left-[4%] top-[10%] h-[78%] w-[78%] rounded-full bg-[#f8c99c] opacity-45 blur-[64px]" />
          <div className="absolute right-0 top-[4%] h-[78%] w-[92%] rotate-[2.5deg] overflow-hidden border-[10px] border-white/85 shadow-[22px_25px_0_#f8d9be,0_25px_60px_rgba(55,36,22,0.2)] lg:h-[84%] lg:w-[94%]">
            <img
              src="/images/pageheaderbanner.png"
              alt="Industrial refinery at sunset"
              className="block h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(12deg,rgba(24,19,15,0.46),transparent_55%)]" />
            <div className="absolute bottom-6 left-[25px] z-10 flex items-center gap-2.5 text-[0.75rem] font-bold uppercase tracking-[0.08em] text-white">
              <span className="h-2 w-2 rounded-full bg-[#f59c34] shadow-[0_0_0_5px_rgba(245,156,52,0.2)]" />
              <span>Precision for every process</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 z-20 flex min-w-[205px] items-center gap-3 bg-white px-4 py-3.5 text-[#e96512] shadow-[0_15px_35px_rgba(55,36,22,0.14)] lg:bottom-[3%] lg:px-5 lg:py-[17px]">
            <Factory size={21} aria-hidden="true" />
            <div>
              <strong className="block text-[0.88rem] text-[#282321]">Made for industry</strong>
              <span className="mt-[3px] block text-[0.7rem] text-[#8b817a]">Solutions that perform</span>
            </div>
          </div>
          <span className="absolute right-[3%] top-0 text-[1.2rem] font-extrabold text-[#d60e1e]">01 <i className="text-[0.8rem] font-normal not-italic text-[#a99d94]">/ 03</i></span>
        </div>
      </div>
      <div className="absolute bottom-[29px] left-[5%] z-10 flex items-center gap-3 text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-[#9b9088] max-[560px]:hidden" aria-hidden="true">
        <span className="h-px w-[42px] bg-[#d60e1e]" /> Scroll to discover
      </div>
    </section>
  );
};

export default Hero;