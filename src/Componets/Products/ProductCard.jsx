import { ArrowRight, Boxes, PackageCheck } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#eee3da] bg-white shadow-[0_10px_30px_rgba(62,35,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_18px_38px_rgba(62,35,17,0.12)]">
      <div className="relative flex h-[245px] items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#fffaf6_0%,#fdf0e6_100%)] p-8">
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#d94c16] shadow-sm">
          {product.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-[#201f1f] px-2.5 py-1 text-[0.65rem] font-bold text-white">
          {product.quantity}
        </span>
        <div className="absolute -bottom-20 left-1/2 h-36 w-52 -translate-x-1/2 rounded-full bg-[#f5c59d]/50 blur-2xl transition duration-300 group-hover:scale-125" />
        <img
          src={product.image}
          alt={product.product_name}
          className="relative z-10 h-full w-full object-contain drop-shadow-[0_14px_10px_rgba(57,32,17,0.18)] transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-[3.5rem] text-[1.28rem] font-extrabold leading-[1.08] text-[#282321]">{product.product_name}</h3>

        <div className="mt-5 grid grid-cols-2 gap-2 border-y border-[#eee3da] py-3">
          <div className="flex items-center gap-2">
            <PackageCheck size={17} className="shrink-0 text-[#e96512]" aria-hidden="true" />
            <div>
              <span className="block text-[0.62rem] font-bold uppercase tracking-wide text-[#a0968e]">Pack size</span>
              <strong className="text-sm text-[#332e2b]">{product.quantity}</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Boxes size={17} className="shrink-0 text-[#e96512]" aria-hidden="true" />
            <div>
              <span className="block text-[0.62rem] font-bold uppercase tracking-wide text-[#a0968e]">Minimum Order</span>
              <strong className="text-sm text-[#332e2b]">{product.min_order_no} {product.unit}</strong>
            </div>
          </div>
        </div>

        <div className="mt-auto flex gap-2 pt-5">
          <a href={`/contact?product=${encodeURIComponent(product.product_id)}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-[#d60e1e] px-3 py-3 text-center text-xs font-extrabold text-white transition hover:bg-[#b90c19]">
            Request quote <ArrowRight size={15} aria-hidden="true" />
          </a>
          <a href={`/contact?product=${encodeURIComponent(product.product_id)}`} aria-label={`Get details for ${product.product_name}`} className="inline-flex items-center justify-center rounded-sm border border-[#eadfd6] px-3 text-[#d60e1e] transition hover:bg-[#fff4eb]">
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;