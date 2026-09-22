import { ArrowRight, FlaskConical, Handshake, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  { icon: FlaskConical, title: "High-Quality Raw Materials", text: "Carefully sourced for consistent purity." },
  { icon: ShieldCheck, title: "Strict Quality Control", text: "Tested at every stage for reliable performance." },
  { icon: Handshake, title: "Timely Supply", text: "Ensuring your projects never stop." },
  { icon: Truck, title: "Wide Range of Solutions", text: "For all types of paints and coatings." },
  { icon: ShieldCheck, title: "Customer-Centric Approach", text: "Always focused on your success." },
  { icon: FlaskConical, title: "Industry Expertise", text: "Years of experience in chemical solutions." },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#20252b] px-[5%] py-20 text-white sm:py-24" aria-labelledby="why-choose-title">
      <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full border border-[#f59c3440]" />
      <div className="absolute -bottom-44 left-[35%] h-96 w-96 rounded-full bg-[#d60e1e1a] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div className="max-w-[470px]">
          <div className="mb-5 flex items-center gap-3 text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-[#f59c34]">
            <span className="h-0.5 w-10 bg-[#f59c34]" /> Why Choose Us
          </div>
          <h2 id="why-choose-title" className="text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.045em]">
            More Than Just <span className="text-[#f59c34]">a Thinner Supplier</span>
          </h2>
          <p className="mt-6 max-w-[430px] text-base leading-7 text-[#c4c9ce]">
            We are not just suppliers, we are your partners in creating better, brighter and longer-lasting finishes. Our products are designed to deliver excellent performance, consistency and value for every project.
          </p>
          <a href="#products" className="mt-8 inline-flex items-center gap-3 border-b border-[#f59c34] pb-2 text-sm font-extrabold text-[#fff4eb] transition hover:gap-5 hover:text-[#f59c34]">
            Why Us <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className={`border-[#4a5158] py-6 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f59c34] text-[#20252b]">
                <Icon size={20} strokeWidth={2.4} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-extrabold text-white">{title}</h3>
              <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#aeb5bb]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
