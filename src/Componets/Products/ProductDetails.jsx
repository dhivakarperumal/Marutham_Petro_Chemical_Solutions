import { ArrowLeft, ArrowRight, Boxes, PackageCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import productData from "../../data/product.json";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData.find((item) => item.product_id === productId) || productData[0];
  const categoryProducts = productData.filter((item) => item.category === product.category);

  return (
    <main className="bg-[#fffaf6]">
      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#fffaf4_0%,#fff_52%,#fff1e6_100%)] px-[5%] py-12 sm:py-20">
        <div className="mx-auto max-w-[1380px]">
          <Link to="/products" className="mb-10 inline-flex items-center gap-2 text-sm font-extrabold text-[#766e68] transition hover:text-[#d60e1e]">
            <ArrowLeft size={17} aria-hidden="true" /> Back to products
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[6px] border border-[#f2dfd0] bg-[linear-gradient(145deg,#fff8f2_0%,#fce8d8_100%)] p-8 shadow-[0_18px_45px_rgba(62,35,17,0.08)] sm:min-h-[500px]">
                <div className="absolute -bottom-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[#f5c59d]/50 blur-3xl" />
                <img src={product.image} alt={product.product_name} className="relative z-10 max-h-[440px] w-full object-contain drop-shadow-[0_20px_15px_rgba(57,32,17,0.2)]" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5" aria-label={`${product.category} product sizes`}>
                {categoryProducts.map((item) => {
                  const isActive = item.product_id === product.product_id;
                  return (
                    <Link
                      key={item.product_id}
                      to={`/products/${item.product_id}`}
                      aria-label={`View ${item.product_name}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`group/thumb rounded-md border bg-white p-2 transition ${isActive ? "border-[#d60e1e] shadow-[0_8px_18px_rgba(214,14,30,0.16)]" : "border-[#f2dfd0] hover:border-[#e96512]"}`}
                    >
                      <div className="flex h-16 items-center justify-center rounded-sm bg-[#fff8f2] p-1 sm:h-20">
                        <img src={item.image} alt="" className="h-full w-full object-contain transition duration-300 group-hover/thumb:scale-105" />
                      </div>
                      <span className={`mt-1 block truncate text-center text-[0.65rem] font-extrabold ${isActive ? "text-[#d60e1e]" : "text-[#766e68]"}`} title={item.product_name}>
                        {item.quantity}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="mb-7 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#d94c16]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d60e1e]" />
                <span>{product.brand}</span>
                <span className="text-[#b9aaa0]">{product.product_id}</span>
              </div>
              <p className="mb-3 text-sm font-bold text-[#a0968e]">{product.category}</p>
              <h1 className="max-w-[700px] text-[clamp(2.5rem,5vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-[#2d3035]">{product.product_name}</h1>
              <div className="mt-7 max-w-[650px] border-l-2 border-[#f3b58e] pl-5">
                <p className="text-base leading-8 text-[#766e68]">{product.description}</p>
              </div>

              <div className="mt-9 grid max-w-[650px] grid-cols-2 border-y border-[#eadfd6] py-5">
                <div className="border-r border-[#eadfd6] pr-4">
                  <div className="mb-3 flex items-center gap-2 text-[#d60e1e]">
                    <PackageCheck size={18} aria-hidden="true" />
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em]">Pack size</span>
                  </div>
                  <strong className="block text-2xl font-extrabold tracking-[-0.03em] text-[#2d3035]">{product.quantity}</strong>
                </div>
                <div className="pl-4">
                  <div className="mb-3 flex items-center gap-2 text-[#d60e1e]">
                    <Boxes size={18} aria-hidden="true" />
                    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em]">Min. order</span>
                  </div>
                  <strong className="block text-2xl font-extrabold tracking-[-0.03em] text-[#2d3035]">{product.min_order_no} {product.unit}</strong>
                  <span className="mt-1 block text-xs font-semibold text-[#766e68]">{product.minimum_order_description}</span>
                </div>
              </div>

              <Link to={`/contact?product=${encodeURIComponent(product.product_id)}`} className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#d60e1e] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_22px_rgba(214,14,30,0.2)] transition hover:bg-[#b90c19]">
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
