import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import brandData from '../data/brand.json';
import productData from '../data/product.json';

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return [];

    return productData.filter((product) => [
      product.product_name,
      product.product_id,
      product.category,
      product.brand,
      product.quantity,
    ].some((value) => value.toLowerCase().includes(query))).slice(0, 6);
  }, [searchTerm]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsSearchOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="relative w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/logo.png" alt="Marutham Marketing" className="h-12 md:h-14 object-contain" />
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-[#4a5568]">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`pb-1 border-b-2 transition-colors ${
                    isActive 
                      ? 'text-[#f0301a] border-[#f0301a]' 
                      : 'border-transparent hover:text-[#f0301a]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="relative" onMouseEnter={() => setIsBrandsOpen(true)} onMouseLeave={() => setIsBrandsOpen(false)}>
              <button type="button" onClick={() => setIsBrandsOpen((open) => !open)} className={`border-b-2 pb-1 transition-colors ${location.pathname.startsWith('/brands/') ? 'border-[#f0301a] text-[#f0301a]' : 'border-transparent hover:text-[#f0301a]'}`} aria-expanded={isBrandsOpen}>
                Brands <span className="ml-1 text-xs">▾</span>
              </button>
              {isBrandsOpen && (
                <div className="absolute right-0 top-full z-50 w-56 pt-3">
                  <div className="rounded-md border border-gray-100 bg-white p-2 shadow-xl">
                    {brandData.map((brand) => (
                      <Link key={brand.product_id} to={`/brands/${slugify(brand.name)}`} onClick={() => setIsBrandsOpen(false)} className="block rounded px-3 py-2.5 text-sm font-semibold text-[#4a5568] transition hover:bg-[#fff4eb] hover:text-[#f0301a]">
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          {navLinks.slice(3).map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`pb-1 border-b-2 transition-colors ${
                  isActive 
                    ? 'text-[#f0301a] border-[#f0301a]' 
                    : 'border-transparent hover:text-[#f0301a]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          </div>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button type="button" onClick={() => setIsSearchOpen((open) => !open)} aria-label="Search products" aria-expanded={isSearchOpen} className="p-2.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button className="hidden sm:flex bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white font-medium py-2.5 px-5 md:px-6 rounded-md items-center transition-all shadow-md">
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button 
              className="lg:hidden p-2 text-black hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6h11M4 12h16M13 18h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="absolute right-4 top-full z-[60] mt-2 w-[min(92vw,380px)] rounded-md border border-[#eadfd6] bg-white p-3 shadow-xl md:right-8">
            <div className="flex items-center gap-2 rounded-sm border border-[#eadfd6] bg-[#fffaf6] px-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-[#d60e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
              <input
                autoFocus
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-[#282321] outline-none placeholder:text-[#a0968e]"
                aria-label="Search products"
              />
              <button type="button" onClick={() => { setSearchTerm(''); setIsSearchOpen(false); }} className="text-[#a0968e] transition hover:text-[#d60e1e]" aria-label="Close product search">
                <span className="text-lg leading-none">&times;</span>
              </button>
            </div>

            {searchTerm.trim() && (
              <div className="mt-2 max-h-72 overflow-y-auto">
                {searchResults.length ? searchResults.map((product) => (
                  <Link key={product.product_id} to={`/products/${product.product_id}`} onClick={() => { setIsSearchOpen(false); setSearchTerm(''); }} className="flex items-center gap-3 rounded-sm px-2 py-2.5 transition hover:bg-[#fff4eb]">
                    <img src={product.image} alt="" className="h-10 w-10 rounded-sm bg-[#fff8f2] object-contain p-1" />
                    <span className="min-w-0">
                      <strong className="block truncate text-sm text-[#282321]">{product.product_name}</strong>
                      <span className="text-xs text-[#766e68]">{product.category} · {product.quantity}</span>
                    </span>
                  </Link>
                )) : (
                  <p className="px-2 py-3 text-sm text-[#766e68]">No products found.</p>
                )}
              </div>
            )}
          </div>
        )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '/');
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors py-2 border-b border-gray-50 ${
                  isActive ? 'text-[#f0301a]' : 'text-[#4a5568] hover:text-[#f0301a]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="border-b border-gray-50 pb-2">
            <p className="py-2 text-lg font-medium text-[#4a5568]">Brands</p>
            <div className="ml-3 flex flex-col gap-2 border-l-2 border-[#f0301a] pl-4">
              {brandData.map((brand) => (
                <Link key={brand.product_id} to={`/brands/${slugify(brand.name)}`} onClick={() => setIsMobileMenuOpen(false)} className="py-1 text-base font-medium text-[#4a5568] hover:text-[#f0301a]">{brand.name}</Link>
              ))}
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-[#fb5921] to-[#e41a15] hover:from-[#e41a15] hover:to-[#c61410] text-white font-medium py-3 px-6 rounded-md flex items-center justify-center transition-all shadow-md w-full mt-4">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  </header>
  );
};

export default Navbar;