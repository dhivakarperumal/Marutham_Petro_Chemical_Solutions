import { ArrowRight, Boxes, Eye, PackageCheck } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#eee3da] bg-white shadow-[0_10px_30px_rgba(62,35,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_18px_38px_rgba(62,35,17,0.12)]">
      <div className="relative flex h-[300px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fffaf6_0%,#fdf0e6_100%)] p-6">
        <span className="absolute left-4 top-4 rounded-full border border-[#f3b58e] bg-[linear-gradient(135deg,#fff1eb_0%,#ffd7c2_100%)] px-2.5 py-1 text-[0.54rem] font-extrabold uppercase tracking-[0.1em] text-[#b90c19] shadow-sm">
          {product.category}
        </span>
        {/* <span className="absolute right-4 top-4 rounded-full bg-[#201f1f] px-2.5 py-1 text-[0.65rem] font-bold text-white">
          {product.quantity}
        </span> */}
        <div className="absolute -bottom-20 left-1/2 h-36 w-52 -translate-x-1/2 rounded-full bg-[#f5c59d]/50 blur-2xl transition duration-300 group-hover:scale-125" />
        <img
          src={product.image}
          alt={product.product_name}
          className="relative z-10 h-full w-full object-contain drop-shadow-[0_14px_10px_rgba(57,32,17,0.18)] transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="truncate text-[1.1rem] font-extrabold leading-tight text-[#2d3035]" title={product.product_name}>{product.product_name}</h3>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-[#f2dfd0] bg-[#fff8f2] p-2.5">
            <div className="mb-1 flex items-center gap-1.5 text-[#f00943]">
              <PackageCheck size={14} aria-hidden="true" />
              <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.08em]">Pack size</span>
            </div>
            <strong className="block text-sm font-extrabold text-[#2d3035]">{product.quantity}</strong>
          </div>
          <div className="rounded-md border border-[#f2dfd0] bg-[#fff8f2] p-2.5">
            <div className="mb-1 flex items-center gap-1.5 text-[#d60e1e]">
              <Boxes size={14} aria-hidden="true" />
              <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.08em]">Min. order</span>
            </div>
            <strong className="block text-sm font-extrabold text-[#2d3035]">{product.min_order_no} {product.unit}</strong>
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-4">
          <a href={`/contact?product=${encodeURIComponent(product.product_id)}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#d60e1e] px-3 py-2.5 text-center text-[0.68rem] font-extrabold text-white transition hover:bg-[#b90c19]">
            Order Now <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a href={`/contact?product=${encodeURIComponent(product.product_id)}`} aria-label={`View details for ${product.product_name}`} title="View details" className="inline-flex items-center justify-center rounded-sm border border-[#eadfd6] px-3 text-[#d60e1e] transition hover:bg-[#fff4eb]">
            <Eye size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;