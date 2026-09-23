import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Droplets,
  FileText,
  Flame,
  HardHat,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../../CommonComponents/PageHeader";
import brandData from "../../data/brand.json";
import productData from "../../data/product.json";
import ProductCard from "../Products/ProductCard";

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const getPrecautionConfig = (title = "", index = 0) => {
  const t = title.toLowerCase();
  if (t.includes("fire") || t.includes("flammab")) {
    return {
      icon: Flame,
      category: "Flammability Control",
      themeColor: "#dc2626",
      badgeColor: "bg-red-50 text-red-700 border-red-200/80",
      iconWrapper: "bg-red-500/10 text-red-600 border border-red-200/60",
      glowBorder: "hover:border-red-400 hover:shadow-[0_16px_36px_rgba(220,38,38,0.1)]",
      topGradient: "from-red-500 via-orange-500 to-amber-500",
      protocolId: "SEC-FIRE",
    };
  }
  if (t.includes("ventil") || t.includes("odor") || t.includes("evaporat")) {
    return {
      icon: Wind,
      category: "Vapor & Air Quality",
      themeColor: "#0284c7",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200/80",
      iconWrapper: "bg-sky-500/10 text-sky-600 border border-sky-200/60",
      glowBorder: "hover:border-sky-400 hover:shadow-[0_16px_36px_rgba(2,132,199,0.1)]",
      topGradient: "from-sky-500 via-blue-500 to-cyan-500",
      protocolId: "SEC-AIR",
    };
  }
  if (t.includes("toxic") || t.includes("emission")) {
    return {
      icon: Droplets,
      category: "Eco & Low Toxicity",
      themeColor: "#059669",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      iconWrapper: "bg-emerald-500/10 text-emerald-600 border border-emerald-200/60",
      glowBorder: "hover:border-emerald-400 hover:shadow-[0_16px_36px_rgba(5,150,105,0.1)]",
      topGradient: "from-emerald-500 via-teal-500 to-green-500",
      protocolId: "SEC-TOX",
    };
  }
  if (t.includes("container") || t.includes("child") || t.includes("packag")) {
    return {
      icon: PackageCheck,
      category: "Container Safety",
      themeColor: "#d97706",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
      iconWrapper: "bg-amber-500/10 text-amber-600 border border-amber-200/60",
      glowBorder: "hover:border-amber-400 hover:shadow-[0_16px_36px_rgba(217,119,6,0.1)]",
      topGradient: "from-amber-500 via-yellow-500 to-orange-500",
      protocolId: "SEC-PKG",
    };
  }
  if (t.includes("guideline") || t.includes("usage") || t.includes("irritat")) {
    return {
      icon: HardHat,
      category: "Personal Protection",
      themeColor: "#e96512",
      badgeColor: "bg-orange-50 text-[#d94c16] border-orange-200/80",
      iconWrapper: "bg-orange-500/10 text-[#e96512] border border-[#e96512]/20",
      glowBorder: "hover:border-[#e96512] hover:shadow-[0_16px_36px_rgba(233,101,18,0.12)]",
      topGradient: "from-[#e96512] via-orange-500 to-amber-500",
      protocolId: "SEC-PPE",
    };
  }
  return {
    icon: ShieldCheck,
    category: "Standard Compliance",
    themeColor: "#0d9488",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200/80",
    iconWrapper: "bg-teal-500/10 text-teal-600 border border-teal-200/60",
    glowBorder: "hover:border-teal-400 hover:shadow-[0_16px_36px_rgba(13,148,136,0.1)]",
    topGradient: "from-teal-500 via-emerald-500 to-cyan-500",
    protocolId: `SEC-0${index + 1}`,
  };
};

const sizeSpecifications = [
  {
    netSize: "4500 ML",
    grossSize: "5000 ML",
    category: "Can Sizes",
    type: "Heavy-Duty Master Can",
    idealFor: "Industrial thinning & large-scale coating operations",
    recommended: "Commercial / Bulk",
  },
  {
    netSize: "2700 ML",
    grossSize: "3000 ML",
    category: "Can Sizes",
    type: "Commercial Metal Can",
    idealFor: "Professional paint workshops & automotive refinishing",
    recommended: "Workshops",
  },
  {
    netSize: "1800 ML",
    grossSize: "2000 ML",
    category: "Can Sizes",
    type: "Medium Contractor Can",
    idealFor: "Contractors, maintenance crews & facility repairs",
    recommended: "Contractors",
  },
  {
    netSize: "900 ML",
    grossSize: "1000 ML",
    category: "Can Sizes",
    type: "Standard Workshop Bottle / Can",
    idealFor: "Routine workshop painting & equipment cleaning",
    recommended: "Daily Use",
  },
  {
    netSize: "450 ML",
    grossSize: "500 ML",
    category: "Can Sizes",
    type: "Compact Touch-up Bottle / Can",
    idealFor: "Precision touch-ups, hobbies & DIY painting projects",
    recommended: "Retail / DIY",
  },
];

const BrandDetails = () => {
  const { brandSlug } = useParams();
  const [activeTab, setActiveTab] = useState("sizes");
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
            <p className="mt-7 max-w-[650px] text-lg leading-8 text-[#766e68] text-justify">{brand.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#available-sizes" className="inline-flex items-center gap-2 rounded-sm bg-[#d60e1e] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(214,14,30,0.2)] transition hover:bg-[#b90c19]">
                View available sizes <ArrowRight size={17} aria-hidden="true" />
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

      {/* Available Sizes Section (Rich Packaging Hub) */}
      <section id="available-sizes" className="border-t border-[#ebdcd0] bg-[#fffdfa] px-[5%] py-16 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          {/* Section Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#ebdcd0] pb-6">
            <div>
              <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
                Product Specifications
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#282321]">
                Available Sizes
              </h2>
            </div>
            <span className="inline-flex items-center rounded-md bg-[#e96512] px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md shadow-[#e96512]/20 self-start sm:self-auto">
              Available Sizes
            </span>
          </div>

          <div className="mt-8 space-y-8 animate-fadeIn">
            {/* Highlight Banner: Customise sizes available */}
            {/* <div className="rounded-2xl border border-[#fbd3b7] bg-[linear-gradient(135deg,#fff8f2_0%,#fef2e8_100%)] p-6 sm:p-7 shadow-[0_8px_24px_rgba(233,101,18,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d60e1e]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#d60e1e]">
                    <Sparkles size={14} className="text-[#e96512]" /> Customise sizes available
                  </span>
                  <h3 className="mt-2.5 text-lg sm:text-xl font-extrabold text-[#282321]">
                    Engineered Packaging with Flexible Customization
                  </h3>
                  <p className="mt-1 text-sm text-[#766e68] max-w-[720px] leading-relaxed">
                    All standard can sizes are manufactured with high-precision fill volumes. Need tailored container dimensions, customized fill ratios, or OEM private branding for bulk contracts? We accommodate your custom requirements.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#e96512] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-[#e96512]/25 transition hover:bg-[#d94c16] self-start sm:self-auto"
                >
                  Enquire Custom Size <ArrowRight size={14} />
                </Link>
              </div>
            </div> */}

            {/* 5 Visual Specification Cards */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#8b827b]">
                  Available Can Capacity Range
                </h4>
                <span className="text-xs font-semibold text-[#e96512]">
                  5 Standard Packaging Options
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {sizeSpecifications.map((spec) => (
                  <div
                    key={spec.netSize}
                    className="group relative flex flex-col justify-between rounded-xl border border-[#ebdcd0] bg-white p-5 shadow-[0_4px_16px_rgba(62,35,17,0.04)] transition duration-300 hover:-translate-y-1.5 hover:border-[#e96512] hover:shadow-[0_12px_28px_rgba(233,101,18,0.12)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-[#f3b58e] bg-[#fff8f2] px-2.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-wider text-[#d94c16]">
                          {spec.category}
                        </span>
                        <span className="text-[0.65rem] font-bold text-[#8b827b]">
                          {spec.recommended}
                        </span>
                      </div>

                      <div className="mt-4">
                        <div className="text-2xl sm:text-3xl font-black tracking-tight text-[#282321] group-hover:text-[#e96512] transition">
                          {spec.netSize}
                        </div>
                        <div className="mt-0.5 text-xs font-bold text-[#8b827b]">
                          / {spec.grossSize}
                        </div>
                      </div>

                      <p className="mt-3 text-xs leading-5 text-[#766e68]">
                        {spec.idealFor}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-[#f0e7df] pt-3 flex items-center justify-between text-[0.7rem]">
                      <span className="font-bold text-[#282321] truncate max-w-[65%]">{spec.type}</span>
                      <span className="font-extrabold text-[#d60e1e]">Customizable</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Elevated Specification Table Matrix */}
            <div className="overflow-hidden rounded-2xl border border-[#ebdcd0] bg-white shadow-sm">
              <div className="border-b border-[#ebdcd0] bg-[#fff8f2] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#282321]">
                    Can Sizes Specification Matrix
                  </h4>
                  <p className="text-xs text-[#766e68]">
                    Certified volume ratings with nominal overflow container capacities
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700 self-start sm:self-auto">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Ready For Bulk Dispatch
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#ebdcd0] bg-[#faf5f0] text-[0.7rem] font-extrabold uppercase tracking-wider text-[#766e68]">
                      <th className="px-6 py-3.5">Category</th>
                      <th className="px-6 py-3.5">Standard Can Size</th>
                      <th className="px-6 py-3.5">Nominal Container Capacity</th>
                      <th className="px-6 py-3.5">Packaging Description</th>
                      <th className="px-6 py-3.5 text-right">Custom Sizing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f0e7df]">
                    {sizeSpecifications.map((row) => (
                      <tr key={row.netSize} className="transition hover:bg-[#fff9f4]">
                        <td className="px-6 py-4 font-bold text-[#282321]">
                          <span className="inline-flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#e96512]" />
                            {row.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-extrabold text-[#282321]">
                          {row.netSize}
                        </td>
                        <td className="px-6 py-4 font-black text-[#e96512]">
                          {row.grossSize}
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-[#766e68]">
                          {row.type}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700 border border-emerald-200">
                            Customizable
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose It / Applications */}
      {/* <section id="applications" className="px-[5%] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-3 flex items-center gap-3 text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">
              <span className="h-0.5 w-9 bg-[#e96512]" /> Why choose it
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-extrabold leading-none tracking-[-0.04em] text-[#282321]">
              Made for better <span className="text-[#d60e1e]">work.</span>
            </h2>
            <p className="mt-5 max-w-[450px] leading-7 text-[#766e68]">
              A professional solution with practical performance across everyday painting and coating requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {brand.available_sizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full border border-[#eadfd6] bg-white px-4 py-2 text-xs font-bold text-[#766e68]"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {brand.applications.map((application) => (
              <div
                key={application}
                className="flex items-start gap-3 rounded-sm border border-[#eee3da] bg-white p-5 shadow-[0_8px_24px_rgba(62,35,17,0.04)]"
              >
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#e96512]" aria-hidden="true" />
                <span className="text-sm font-bold leading-6 text-[#4f4843]">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Safety and Handling */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff8f2] via-[#faf5f0] to-white px-[5%] py-20 border-t border-[#eee3da]">
        {/* Subtle background ambient glows */}
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#e96512]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-[#d60e1e]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1380px]">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#fbd3b7] bg-white px-3.5 py-1 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-[#d94c16] shadow-sm">
                <ShieldCheck size={14} className="text-[#e96512]" />
                <span>Workplace Protection & Safe Usage</span>
              </div>
              <h2 className="mt-3.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#282321]">
                Safety, Handling & <span className="text-[#e96512]">Precautions</span>
              </h2>
              <p className="mt-3 max-w-[680px] text-sm sm:text-base leading-relaxed text-[#766e68]">
                Every batch of {brand.name} is formulated under stringent quality parameters. Follow these essential safety protocols to ensure safe storage, worker well-being, and peak performance.
              </p>
            </div>

            {/* Quick Compliance Badge */}
            <div className="inline-flex items-center gap-3.5 rounded-2xl border border-[#ebdcd0] bg-white p-4 shadow-sm self-start lg:self-auto">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#282321]">
                  Industrial Grade Quality
                </div>
                <div className="text-[0.72rem] font-bold text-[#8b827b]">
                  Safe Handling & Storage Certified
                </div>
              </div>
            </div>
          </div>

          {/* Precaution Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brand.safety_precautions.map((precaution, idx) => {
              const config = getPrecautionConfig(precaution.title, idx);
              const IconComponent = config.icon;

              return (
                <div
                  key={precaution.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ebdcd0] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(62,35,17,0.03)] transition-all duration-300 hover:-translate-y-1.5 ${config.glowBorder}`}
                >
                  {/* Top Colored Accent Stripe */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.topGradient} opacity-70 transition-all duration-300 group-hover:h-1.5 group-hover:opacity-100`}
                  />

                  <div>
                    {/* Top Row: Icon + Protocol & Category */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 shadow-sm ${config.iconWrapper}`}
                      >
                        <IconComponent size={22} />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="font-mono text-[0.68rem] font-black tracking-wider text-[#b5a99f]">
                          {config.protocolId}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-wider ${config.badgeColor}`}
                        >
                          {config.category}
                        </span>
                      </div>
                    </div>

                    {/* Precaution Title */}
                    <h3 className="mt-5 text-lg font-black text-[#282321] transition-colors duration-200 group-hover:text-[#e96512]">
                      {precaution.title}
                    </h3>

                    {/* Precaution Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#766e68]">
                      {precaution.description}
                    </p>
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#f0e7df] pt-3.5 text-[0.7rem]">
                    <span className="flex items-center gap-1.5 font-bold text-[#8b827b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Recommended Protocol
                    </span>
                    <span className="font-extrabold uppercase tracking-wider text-[#282321] group-hover:text-[#e96512] transition-colors">
                      Safety Priority
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Essential Chemical Handling Protocol Bar */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#ebdcd0] bg-white shadow-sm">
            <div className="border-b border-[#ebdcd0] bg-[#fff8f2] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e96512]/15 text-[#e96512]">
                  <AlertTriangle size={15} />
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#282321]">
                  Standard Chemical Safety Checklist
                </span>
              </div>
              <span className="text-[0.72rem] font-bold text-[#8b827b]">
                Mandatory for all application & storage environments
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#f0e7df] p-2 sm:p-4">
              <div className="p-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-100">
                  <Wind size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#282321]">Active Airflow</h4>
                  <p className="mt-1 text-[0.72rem] leading-relaxed text-[#766e68]">
                    Operate in cross-ventilated booths or outdoor setups to avoid vapor concentration.
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#e96512] border border-orange-100">
                  <HardHat size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#282321]">Mandatory PPE</h4>
                  <p className="mt-1 text-[0.72rem] leading-relaxed text-[#766e68]">
                    Wear chemical-resistant nitrile gloves, safety eye goggles, and protective masks.
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 border border-red-100">
                  <Flame size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#282321]">Heat & Spark Isolation</h4>
                  <p className="mt-1 text-[0.72rem] leading-relaxed text-[#766e68]">
                    Store upright in cool, shaded spaces far from electric motors, welding sparks, or flames.
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#282321]">MSDS & Technical Help</h4>
                  <p className="mt-1 text-[0.72rem] leading-relaxed text-[#766e68]">
                    Need Material Safety Data Sheets (MSDS) or bulk documentation?{" "}
                    <Link to="/contact" className="font-extrabold text-[#d60e1e] hover:underline">
                      Contact support
                    </Link>
                  </p>
                </div>
              </div>
            </div>
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


    </main>
  );
};

export default BrandDetails;