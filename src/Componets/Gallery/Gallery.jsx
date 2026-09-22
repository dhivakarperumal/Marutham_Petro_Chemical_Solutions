import { useMemo, useState } from 'react';
import { ArrowRight, BrushCleaning, Factory, House, PaintBucket, Star, Truck } from 'lucide-react';
import PageHeader from '../../CommonComponents/PageHeader';

const categories = ['All', 'Products', 'Packaging', 'Applications', 'Industrial', 'Residential', 'Events', 'Customers'];

const galleryItems = [
  { title: 'Our Product Range', category: 'Products', image: '/images/gallery/1.png' },
  { title: 'Product Showcase', category: 'Products', image: '/images/gallery/2.png' },
  { title: 'Application Close-up', category: 'Applications', image: '/images/gallery/2_1.png' },
  { title: 'Industrial Use', category: 'Industrial', image: '/images/gallery/2_2.png' },
  { title: 'Residential Projects', category: 'Residential', image: '/images/gallery/2_3.png' },
  { title: 'Interior Application', category: 'Applications', image: '/images/gallery/2_4.png' },
  { title: 'Marine Coatings', category: 'Industrial', image: '/images/gallery/2_5.png' },
  { title: 'Wood Coatings', category: 'Industrial', image: '/images/gallery/3.png' },
  { title: 'Automotive Applications', category: 'Applications', image: '/images/gallery/3_1.png' },
  { title: 'Research & Development', category: 'Products', image: '/images/gallery/3_2.png' },
  { title: 'Packaging & Supply', category: 'Packaging', image: '/images/gallery/3_3.png' },
  { title: 'Our Team', category: 'Customers', image: '/images/gallery/3_4.png' },
  { title: 'Exhibitions & Events', category: 'Events', image: '/images/gallery/3_5.png' },
  { title: 'Sustainable Solutions', category: 'Products', image: '/images/gallery/4.png' },
  { title: 'Wide Color Possibilities', category: 'Products', image: '/images/gallery/4_1.png' },
  { title: 'Happy Customers', category: 'Customers', image: '/images/gallery/4_2.png' },
];

const featureCards = [
  { icon: Star, title: 'Quality Results', accent: 'bg-[#fff0eb]' },
  { icon: Truck, title: 'Trusted Solutions', accent: 'bg-[#fff4d9]' },
  { icon: BrushCleaning, title: 'Colorful Possibilities', accent: 'bg-[#f0f7ff]' },
  { icon: PaintBucket, title: 'A Clearer Tomorrow', accent: 'bg-[#f8ebff]' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#f4f0ed] text-[#1c1c1c]">
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-[#1b1b1b] shadow-md transition hover:bg-white"
              aria-label="Close image"
            >
              ×
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="max-h-[80vh] w-full object-contain" />
            <div className="border-t border-gray-200 bg-white px-5 py-4">
              <h3 className="text-xl font-bold text-[#1f1f1f]">{selectedItem.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}

      <PageHeader title="Gallery" />

      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-6 lg:px-8">
        <section className="rounded-[26px] bg-[#f7f3f1] p-4 shadow-[0_20px_60px_rgba(32,26,23,0.08)] md:p-6">
          <div className="mt-8 flex flex-wrap gap-3 rounded-[20px] bg-[#f0eceb] p-3 shadow-inner shadow-[#eee7e2]">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-[#eb5b28] text-white shadow-md shadow-[#eb5b28]/20'
                    : 'bg-white text-[#4a4442] hover:bg-[#fff2ee]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-[24px] border border-[#e8ddd8] bg-white shadow-[0_12px_32px_rgba(35,27,25,0.05)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(10,14,18,0.55)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 text-white">
                  <div className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <PaintBucket size={12} />
                    </span>
                    {item.category}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/80">View</span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-[#eb5b28]"
                      aria-label={`Open ${item.title}`}
                    >
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[1.05rem] font-bold text-[#1f1f1f]">{item.title}</h3>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[26px] bg-[linear-gradient(135deg,#ff6d2d_0%,#ff5a28_20%,#ff3c1a_100%)] p-5 text-white shadow-[0_18px_50px_rgba(235,91,40,0.28)] md:p-7">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1.4fr]">
            <div>
              <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.94] tracking-[-0.06em]">
                LET&apos;S CREATE
                <span className="block text-[#fff4ee]">BRIGHTER SPACES TOGETHER</span>
              </h2>
              <p className="mt-5 max-w-[520px] text-[1.05rem] leading-[1.7] text-[#ffe8df]">
                Explore our work and discover the difference Marutham can make in your next project.
              </p>
              <button className="mt-6 inline-flex items-center gap-3 rounded-md bg-[#17171b] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0e0f12]">
                Get a Quote <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {featureCards.map(({ icon: Icon, title, accent }) => (
                <div key={title} className="rounded-[20px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${accent} text-[#eb5b28]`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-[1.1rem] font-black leading-[1.2] tracking-[-0.04em] text-white">
                    {title.split(' ').slice(0, 2).join(' ')}
                    <span className="mt-1 block text-[#ffe7dd]">{title.split(' ').slice(2).join(' ') || 'Solutions'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
