import { ArrowRight, Brush, FlaskConical, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  { icon: FlaskConical, title: "High Purity and Performance", text: "Each bottle of Marutham Thinner ensures a smooth and even paint finish, making your projects look professional and refined." },
  { icon: ShieldCheck, title: "Safe and Reliable", text: "Our advanced formula prioritizes user safety with low toxicity, making it safer to handle compared to many other thinners in the market." },
  { icon: Zap, title: "Quick Evaporation", text: "Speeds up drying time, allowing you to complete your painting projects efficiently." },
  { icon: Brush, title: "Versatile Use", text: "Suitable for thinning enamel, oil-based, and nitrocellulose paints, as well as cleaning tools and degreasing surfaces." },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(118deg,#fffaf4_0%,#fff_52%,#fff4eb_100%)] px-[5%] py-20 text-[#282321] sm:py-24" aria-labelledby="why-choose-title">
      <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full border border-[#e9651221]" />
      <div className="absolute -bottom-44 left-[35%] h-96 w-96 rounded-full bg-[#f8c99c40] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div className="max-w-[470px]" data-aos="fade-right" data-aos-duration="800">
          <div className="mb-5 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-[#d94c16]">
            <span className="h-0.5 w-10 bg-[#e96512]" /> Why Choose Us
          </div>
          <h2 id="why-choose-title" className="text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#282321]">
            More Than Just <span className="text-[#d60e1e]">a Thinner Supplier</span>
          </h2>
          <p className="mt-6 max-w-[430px] text-base leading-7 text-[#766e68]">
            Choose Marutham Thinner for superior quality, safety, and reliability in every use. Available in various bottle sizes, it caters to all needs—whether for large-scale industrial applications or smaller home projects.
          </p>
          <a href="#products" className="mt-8 inline-flex items-center gap-3 border-b border-[#e96512] pb-2 text-sm font-extrabold text-[#d60e1e] transition hover:gap-5 hover:text-[#b90c19]">
            Why Us <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={`border-[#eadfd6] py-6 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}
              data-aos="fade-left"
              data-aos-delay={index * 120}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1eb] text-[#d60e1e]">
                <Icon size={20} strokeWidth={2.4} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-extrabold text-[#282321]">{title}</h3>
              <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#766e68]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
