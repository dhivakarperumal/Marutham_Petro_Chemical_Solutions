import { ArrowLeft, ArrowRight, Boxes, PackageCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import productData from "../../data/product.json";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData.find((item) => item.product_id === productId) || productData[0];

  return (
    <main className="bg-[#fffaf6]">
      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#fffaf4_0%,#fff_52%,#fff1e6_100%)] px-[5%] py-12 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          <Link to="/products" className="mb-10 inline-flex items-center gap-2 text-sm font-extrabold text-[#766e68] transition hover:text-[#d60e1e]">
            <ArrowLeft size={17} aria-hidden="true" /> Back to products
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[6px] border border-[#f2dfd0] bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-8 shadow-[0_18px_45px_rgba(62,35,17,0.08)] sm:min-h-[500px]">
              <div className="absolute -bottom-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#f5c59d]/50 blur-3xl" />
              <img src={product.image} alt={product.product_name} className="relative z-10 max-h-[440px] w-full object-contain drop-shadow-[0_20px_15px_rgba(57,32,17,0.2)]" />
            </div>

            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d94c16]">{product.category}</p>
              <h1 className="max-w-[700px] text-[clamp(2.4rem,5vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#2d3035]">{product.product_name}</h1>
              <p className="mt-6 max-w-[650px] text-base leading-7 text-[#766e68]">{product.description}</p>

              <div className="mt-8 grid max-w-[560px] grid-cols-2 gap-3">
                <div className="rounded-md border border-[#f2dfd0] bg-white p-4">
                  <div className="mb-2 flex items-center gap-2 text-[#d60e1e]">
                    <PackageCheck size={18} aria-hidden="true" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.1em]">Pack size</span>
                  </div>
                  <strong className="text-xl font-extrabold text-[#2d3035]">{product.quantity}</strong>
                </div>
                <div className="rounded-md border border-[#f2dfd0] bg-white p-4">
                  <div className="mb-2 flex items-center gap-2 text-[#d60e1e]">
                    <Boxes size={18} aria-hidden="true" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.1em]">Min. order</span>
                  </div>
                  <strong className="text-xl font-extrabold text-[#2d3035]">{product.min_order_no} {product.unit}</strong>
                </div>
              </div>

              <Link to={`/contact?product=${encodeURIComponent(product.product_id)}`} className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#d60e1e] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(214,14,30,0.2)] transition hover:bg-[#b90c19]">
                Order Now <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
