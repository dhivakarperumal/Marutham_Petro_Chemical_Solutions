import React, { useEffect, useRef, useState } from "react";
import CountUpModule from "react-countup";
import {
  FaAward,
  FaCheck,
  FaLeaf,
  FaUsers,
  FaShieldAlt,
  FaStar,
  FaArrowRight,
  FaBullseye,
  FaEye,
  FaGem,
  FaFlask,
  FaShieldVirus,
  FaHandshake,
  FaUserTie,
  FaIndustry,
  FaBox,
} from "react-icons/fa";
import PageHeader from "../../CommonComponents/PageHeader";

const featureList = [
  {
    title: "Superior Quality",
    text: "Consistent purity and high performance for the best results.",
    icon: <FaAward className="text-2xl text-[#fb5921]" />,
  },
  {
    title: "Safe & Reliable",
    text: "Manufactured with strict safety standards for secure usage.",
    icon: <FaShieldAlt className="text-2xl text-[#fb5921]" />,
  },
  {
    title: "Customer Support",
    text: "Always ready to assist you with the right product guidance.",
    icon: <FaUsers className="text-2xl text-[#fb5921]" />,
  },
  {
    title: "Product Consistency",
    text: "Maintaining the same high quality in every batch, every time.",
    icon: <FaCheck className="text-2xl text-[#fb5921]" />,
  },
];

const CountUpComponent = CountUpModule?.default || CountUpModule;

const VisibleCountUp = ({ end, suffix = "", duration = 2.2, className = "" }) => {
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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {hasStarted ? <CountUpComponent end={end} suffix={suffix} duration={duration} /> : `0${suffix}`}
    </span>
  );
};

const stats = [
  { value: 500, suffix: "+", label: "Happy Customers", icon: <FaUsers className="text-3xl text-[#fb5921]" /> },
  { value: 100, suffix: "+", label: "Products", icon: <FaStar className="text-3xl text-[#fb5921]" /> },
  { value: "Quality", label: "You Can Trust", icon: <FaCheck className="text-3xl text-[#fb5921]" /> },
  { value: "Safer", label: "Solutions", icon: <FaLeaf className="text-3xl text-[#fb5921]" /> },
  { value: "Growing", label: "Together", icon: <FaArrowRight className="text-3xl text-[#fb5921]" /> },
];

const About = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#f7f3ef] text-gray-800">
      <PageHeader title="About Us" />

      <section className="mx-auto max-w-[1500px] px-4 py-10 md:px-8 xl:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[6px] border border-[#eadfd6] bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-5 shadow-[0_20px_45px_rgba(62,35,17,0.08)] sm:p-8" data-aos="fade-right" data-aos-duration="850">
            <img
              src="/images/about/about.png"
              alt="Marutham thinner products and solutions"
              className="relative z-10 block h-auto w-full object-contain object-center"
              loading="lazy"
            />
          </div>

          <div className="relative" data-aos="fade-left" data-aos-duration="850">
            <div className="mb-5 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.28em] text-[#fb5921]">
              <span className="inline-block h-[2px] w-16 bg-[#fb5921]" />
              About Our Company
            </div>

            <h1 className="text-4xl font-black leading-[0.95] text-[#1b1f27] md:text-5xl xl:text-[4.1rem]">
              Transform Your
              <span className="mt-2 block text-[#1b1f27]">Painting Projects With</span>
              <span className="mt-2 block bg-gradient-to-r from-[#fb5921] via-[#ee5f2a] to-[#a4251d] bg-clip-text text-transparent">
                Marutham Thinner
              </span>
            </h1>

            <p className="mt-6 max-w-[700px] text-lg leading-8 text-[#4b5563] text-justify">
              Marutham Marketing is a trusted name in the manufacture and supply of paint thinners,
              enamel thinners, solvents, coatings, and paint-related chemical products. We are committed
              to delivering high-quality solutions that help professionals and DIY enthusiasts achieve the
              perfect finish. With a focus on innovation, consistency, and customer satisfaction, we
              continue to be a preferred partner in the paint and coating industry.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {featureList.map((feature, fIdx) => (
                <div
                  key={feature.title}
                  className="rounded-[20px] border border-[#f1e6df] bg-white/90 p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
                  data-aos="zoom-in-up"
                  data-aos-delay={fIdx * 80}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#fff2ee]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5b6473]">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-16 md:px-8 xl:px-10" data-aos="zoom-in-up" data-aos-delay="100">
        <div className="grid gap-4 rounded-[22px] bg-[#f7efe9] p-4 md:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-[18px] bg-white/80 px-4 py-6 text-center shadow-[0_8px_22px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff2ee]">
                {stat.icon}
              </div>

              {typeof stat.value === "number" ? (
                <div className="text-3xl font-black uppercase tracking-tight text-[#fb5921]">
                  <VisibleCountUp end={stat.value} suffix={stat.suffix || ""} duration={2.2} />
                </div>
              ) : (
                <div className="text-3xl font-black uppercase tracking-tight text-[#fb5921]">{stat.value}</div>
              )}

              <div className="mt-1 text-sm font-medium text-[#4b5563]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-16 md:px-8 xl:px-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: <FaBullseye className="text-xl text-[#fb5921]" />,
              title: "Our Mission",
              text: "To supply high-quality paint thinners and chemical solutions that create value for our customers.",
            },
            {
              icon: <FaEye className="text-xl text-[#fb5921]" />,
              title: "Our Vision",
              text: "To be the most trusted and preferred brand in the paint thinner and coating chemical industry.",
            },
            {
              icon: <FaGem className="text-xl text-[#fb5921]" />,
              title: "Our Values",
              text: (
                <ul className="space-y-2 text-sm text-[#4b5563]">
                  <li className="flex items-center gap-2"><span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#fee7e1] text-[10px] text-[#fb5921]">✓</span> Integrity in Business</li>
                  <li className="flex items-center gap-2"><span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#fee7e1] text-[10px] text-[#fb5921]">✓</span> Customer Satisfaction</li>
                  <li className="flex items-center gap-2"><span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#fee7e1] text-[10px] text-[#fb5921]">✓</span> Quality and Safety</li>
                  <li className="flex items-center gap-2"><span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#fee7e1] text-[10px] text-[#fb5921]">✓</span> Sustainable Growth</li>
                </ul>
              ),
            },
            {
              icon: <FaUserTie className="text-xl text-[#fb5921]" />,
              title: "Our People",
              text: "A dedicated team committed to delivering the best products and support to our customers.",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="rounded-[22px] border border-[#f0e3dc] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff2ee]">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#1f2937]">{item.title}</h3>
              <div className="mt-3 text-[15px] leading-7 text-[#4b5563]">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-16 md:px-8 xl:px-10" data-aos="flip-up" data-aos-delay="140">
        <div className="grid gap-5 rounded-[26px] bg-gradient-to-r from-[#b33d2a] via-[#d34b2d] to-[#8d2c2b] p-4 text-white md:grid-cols-4 md:p-6">
          {[
            { value: "500+", label: "Happy Customers", icon: <FaUsers className="text-3xl" /> },
            { value: "100+", label: "Products", icon: <FaBox className="text-3xl" /> },
            { value: "28+", label: "States Served", icon: <FaLeaf className="text-3xl" /> },
            { value: "5+", label: "Years of Experience", icon: <FaAward className="text-3xl" /> },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 rounded-[18px] border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">{item.icon}</div>
              <div>
                <div className="text-3xl font-black">{item.value}</div>
                <div className="text-sm font-medium text-white/85">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-20 md:px-8 xl:px-10">
        <div className="mb-8 flex items-center justify-between gap-4" data-aos="fade-down">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#fb5921]">Our Product Range</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1f2937] md:text-5xl">Solutions for Every Need</h2>
          </div>
          <button className="hidden rounded-[12px] bg-[#fb5921] px-6 py-3 text-base font-bold text-white shadow-[0_12px_22px_rgba(251,89,33,0.3)] transition hover:bg-[#e84d1d] md:inline-flex items-center gap-2">
            View Products <FaArrowRight />
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            { name: "Enamel Thinners", desc: "Smooth finish, better coverage", image: "/images/hero/img1.png" },
            { name: "Lacquer Thinners", desc: "Fast drying, high performance", image: "/images/hero/img2.png" },
            { name: "Industrial Solvents", desc: "Reliable for multiple applications", image: "/images/hero/img3.png" },
          ].map((product, pIdx) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-[22px] border border-[#f1e5df] bg-white shadow-[0_18px_30px_rgba(15,23,42,0.04)]"
              data-aos="zoom-in-up"
              data-aos-delay={pIdx * 120}
            >
              <div
                className="h-60 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${product.image}")` }}
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#1f2937]">{product.name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#4b5563]">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#fb5921] px-6 py-3 text-base font-bold text-white shadow-[0_12px_22px_rgba(251,89,33,0.3)] transition hover:bg-[#e84d1d]">
            View Products <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
