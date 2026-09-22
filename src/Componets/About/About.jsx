import React from "react";
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

const stats = [
  { value: "500+", label: "Happy Customers", icon: <FaUsers className="text-3xl text-[#fb5921]" /> },
  { value: "100+", label: "Products", icon: <FaStar className="text-3xl text-[#fb5921]" /> },
  { value: "Quality", label: "You Can Trust", icon: <FaCheck className="text-3xl text-[#fb5921]" /> },
  { value: "Safer", label: "Solutions", icon: <FaLeaf className="text-3xl text-[#fb5921]" /> },
  { value: "Growing", label: "Together", icon: <FaArrowRight className="text-3xl text-[#fb5921]" /> },
];

const About = () => {
  return (
    <div className="w-full bg-[#f7f3ef] text-gray-800">
      <PageHeader title="About Us" />

      <section className="mx-auto max-w-[1500px] px-4 py-10 md:px-8 xl:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-[#f5efe9] p-4 shadow-[0_24px_50px_rgba(0,0,0,0.08)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,89,33,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(116,52,227,0.18),transparent_35%)]" />

            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#fce6d6] via-[#f9efe6] to-[#e9e0d8] p-3 sm:p-5">
              <div className="relative mx-auto flex min-h-[550px] max-w-[620px] items-end justify-center">
                <div className="absolute left-0 top-10 rotate-[-10deg] text-3xl font-bold italic text-[#fb5921] opacity-90 sm:text-4xl">
                  <div>Colors</div>
                  <div className="ml-5">Flow</div>
                  <div className="ml-10">Possibilities</div>
                  <div className="ml-16">Grow</div>
                </div>

                <div className="absolute left-6 top-20 h-36 w-36 rounded-full bg-[#f09d5a]/25 blur-3xl" />
                <div className="absolute right-10 top-10 h-36 w-36 rounded-full bg-[#7a37db]/20 blur-3xl" />

                <div className="relative z-10 flex w-full items-end justify-center">
                  <div className="relative flex h-[360px] w-[300px] items-end justify-center sm:h-[420px] sm:w-[340px]">
                    <div className="absolute bottom-0 left-1/2 h-[32px] w-[220px] -translate-x-1/2 rounded-full bg-[#d6c4b1]/70 blur-md" />

                    <div className="absolute bottom-[28px] left-1/2 h-[220px] w-[150px] -translate-x-1/2 rounded-[36px] border border-[#f1e8e2] bg-gradient-to-b from-[#f6f1ed] via-[#f7d8cf] to-[#f1a38a] shadow-[0_18px_20px_rgba(0,0,0,0.12)]">
                      <div className="absolute inset-x-4 top-4 h-10 rounded-t-[20px] bg-[#0f0f12] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)]" />

                      <div className="absolute left-1/2 top-1 h-[76px] w-[120px] -translate-x-1/2 rounded-[22px] bg-gradient-to-r from-[#1b1f27] via-[#0e0f12] to-[#272d38] shadow-[0_12px_16px_rgba(0,0,0,0.25)]" />

                      <div className="absolute inset-x-3 top-[86px] h-[118px] rounded-[18px] bg-gradient-to-b from-[#f5f2ef] via-[#faf5f3] to-[#f4f0ee] text-center">
                        <div className="pt-8 text-[12px] font-black uppercase tracking-[0.2em] text-[#2a2e38]">Marutham</div>
                        <div className="mt-3 text-[18px] font-black uppercase tracking-[0.12em] text-[#d14b2f]">Enamel</div>
                        <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.14em] text-[#e95b32]">Thinner</div>
                      </div>

                      <div className="absolute right-2 top-[150px] h-[120px] w-[26px] rounded-r-[16px] bg-gradient-to-b from-[#ef8a62] via-[#f3995f] to-[#d95032] opacity-90" />
                      <div className="absolute left-2 top-[150px] h-[120px] w-[26px] rounded-l-[16px] bg-gradient-to-b from-[#ef8a62] via-[#f3995f] to-[#d95032] opacity-90" />

                      <div className="absolute inset-x-[26px] top-[195px] h-[42px] rounded-b-[18px] bg-gradient-to-r from-[#f8d7cf] via-[#f3d3ca] to-[#e6a28a] opacity-90" />
                    </div>

                    <div className="absolute bottom-0 left-0 h-[115px] w-[120px] rounded-[20px] bg-gradient-to-br from-[#e47443] via-[#cb3b2f] to-[#a12b2d] shadow-[0_10px_18px_rgba(0,0,0,0.15)]" />
                    <div className="absolute bottom-0 right-0 h-[115px] w-[120px] rounded-[20px] bg-gradient-to-br from-[#6137d0] via-[#4d2f8e] to-[#2d183a] shadow-[0_10px_18px_rgba(0,0,0,0.15)]" />
                    <div className="absolute bottom-12 left-4 h-[110px] w-[90px] rounded-[18px] bg-gradient-to-r from-[#f4d0a9] to-[#d2a44a] opacity-90" />
                    <div className="absolute bottom-8 left-10 h-12 w-24 rounded-full bg-[#f8f1eb]/80 blur-[2px]" />
                    <div className="absolute bottom-3 left-16 h-[120px] w-[64px] rotate-[30deg] rounded-[18px] bg-gradient-to-br from-[#d4572c] via-[#a82620] to-[#5b0b13] shadow-[0_16px_12px_rgba(0,0,0,0.2)]" />
                    <div className="absolute bottom-6 left-28 h-[120px] w-[64px] rotate-[12deg] rounded-[18px] bg-gradient-to-br from-[#aa7d2d] via-[#c86b1f] to-[#7d3218] shadow-[0_16px_12px_rgba(0,0,0,0.2)]" />
                  </div>
                </div>
              </div>

              <div className="relative mt-4 flex items-center justify-between rounded-[18px] border border-[#f0d5c2] bg-[#f9f2ec] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#3b2d2a] sm:text-xs">
                <span className="text-[#6b4b3f]">Premium Solutions</span>
                <span className="text-[#fb5921]">for a brighter tomorrow</span>
              </div>
            </div>
          </div>

          <div className="relative">
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

            <p className="mt-6 max-w-[700px] text-lg leading-8 text-[#4b5563]">
              Marutham Marketing is a trusted name in the manufacture and supply of paint thinners,
              enamel thinners, solvents, coatings, and paint-related chemical products. We are committed
              to delivering high-quality solutions that help professionals and DIY enthusiasts achieve the
              perfect finish. With a focus on innovation, consistency, and customer satisfaction, we
              continue to be a preferred partner in the paint and coating industry.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {featureList.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[20px] border border-[#f1e6df] bg-white/90 p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
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

      <section className="mx-auto max-w-[1500px] px-4 pb-16 md:px-8 xl:px-10">
        <div className="grid gap-4 rounded-[22px] bg-[#f7efe9] p-4 md:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-[18px] bg-white/80 px-4 py-6 text-center shadow-[0_8px_22px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff2ee]">
                {stat.icon}
              </div>
              <div className="text-3xl font-black uppercase tracking-tight text-[#fb5921]">{stat.value}</div>
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
          ].map((item) => (
            <div key={item.title} className="rounded-[22px] border border-[#f0e3dc] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff2ee]">{item.icon}</div>
              <h3 className="text-2xl font-bold text-[#1f2937]">{item.title}</h3>
              <div className="mt-3 text-[15px] leading-7 text-[#4b5563]">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-16 md:px-8 xl:px-10">
        <div className="rounded-[28px] bg-[#f3f1ef] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="pr-0 lg:pr-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#fb5921]">Why Choose Us</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#1f2937] md:text-5xl">
                More Than Just<br />
                a <span className="text-[#fb5921]">Thinner Supplier</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#4b5563]">
                We are not just suppliers, we are your partners in creating better, brighter and longer-lasting finishes.
                Our products are designed to deliver excellent performance, consistency and value for every project.
              </p>
              <button className="mt-6 inline-flex items-center gap-3 rounded-[12px] bg-[#fb5921] px-6 py-3 text-base font-bold text-white shadow-[0_12px_22px_rgba(251,89,33,0.3)] transition hover:bg-[#e84d1d]">
                Why Us <FaArrowRight />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <FaFlask className="text-2xl text-white" />, bg: "bg-[#fb5921]", title: "High-Quality Raw Materials", text: "Carefully sourced for consistent purity." },
                { icon: <FaShieldVirus className="text-2xl text-white" />, bg: "bg-[#f34031]", title: "Strict Quality Control", text: "Tested at every stage for reliable performance." },
                { icon: <FaHandshake className="text-2xl text-white" />, bg: "bg-[#2ec58d]", title: "Timely Supply", text: "Ensuring your projects never stop." },
                { icon: <FaIndustry className="text-2xl text-white" />, bg: "bg-[#3fb1e3]", title: "Wide Range of Solutions", text: "For all types of paints and coatings." },
                { icon: <FaUsers className="text-2xl text-white" />, bg: "bg-[#6a5ae0]", title: "Customer-Centric Approach", text: "Always focused on your success." },
                { icon: <FaAward className="text-2xl text-white" />, bg: "bg-[#f0a221]", title: "Industry Expertise", text: "Years of experience in chemical solutions." },
              ].map((item) => (
                <div key={item.title} className="rounded-[18px] border border-[#e7ddd5] bg-white p-5 shadow-[0_12px_20px_rgba(15,23,42,0.03)]">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4b5563]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-16 md:px-8 xl:px-10">
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
        <div className="mb-8 flex items-center justify-between gap-4">
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
            { name: "Enamel Thinners", desc: "Smooth finish, better coverage", image: "linear-gradient(135deg,#5cb1ff,#ddf0ff)" },
            { name: "Lacquer Thinners", desc: "Fast drying, high performance", image: "linear-gradient(135deg,#ff5e5e,#f7d1a9)" },
            { name: "Industrial Solvents", desc: "Reliable for multiple applications", image: "linear-gradient(135deg,#ffb949,#ffef8a)" },
          ].map((product) => (
            <div key={product.name} className="overflow-hidden rounded-[22px] border border-[#f1e5df] bg-white shadow-[0_18px_30px_rgba(15,23,42,0.04)]">
              <div className="h-60" style={{ background: product.image }} />
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
