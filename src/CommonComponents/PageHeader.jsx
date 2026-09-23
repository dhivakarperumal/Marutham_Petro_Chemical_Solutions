import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  background = "/images/gallery/pageheader.png",
}) => {
  return (
    <div
      className="relative flex h-[180px] w-full items-center justify-center overflow-hidden text-white sm:h-[220px] md:h-[260px]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Bottom orange line */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#fb5921] to-[#e41a15]"></div>

      {/* Bottom Content */}
      <div className="relative z-10 w-full px-4 text-center">
        
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#fb5921] sm:mb-3">
          Marutham Marketing
        </p>

        <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-white/80 sm:mt-3 sm:text-sm">
          <Link
            to="/"
            className="transition hover:text-[#fb5921]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-white">
            {title}
          </span>
        </div>

      </div>
    </div>
  );
};

export default PageHeader;