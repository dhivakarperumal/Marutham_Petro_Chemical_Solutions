import { useMemo, useState } from 'react';
import PageHeader from '../../CommonComponents/PageHeader';

const categories = ['All', 'Products', 'Packaging', 'Applications', 'Industrial', 'Residential', 'Events', 'Customers'];

const galleryItems = [
  { title: 'Marutham Brand', category: 'Products', image: '/images/gallery/img_1.png' },
  { title: 'Zebra Brand', category: 'Products', image: '/images/gallery/img_2.png' },
  { title: 'Eagle Brand', category: 'Products', image: '/images/gallery/img_3.png' },
  { title: 'NC Thinner Brand', category: 'Products', image: '/images/gallery/img_4.png' },
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
            className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center overflow-hidden rounded-md bg-[#fffaf6] p-3 shadow-2xl"
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
            <img src={selectedItem.image} alt={selectedItem.title} className="max-h-[86vh] w-full object-contain" />
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

        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Gallery images">
          {filteredItems.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/3] overflow-hidden rounded-md border border-[#eadfd6] bg-[linear-gradient(145deg,#fffaf6_0%,#fce8d8_100%)] p-3 shadow-[0_10px_26px_rgba(62,35,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#f3b58e] hover:shadow-[0_18px_34px_rgba(62,35,17,0.12)]"
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" loading="lazy" />
            </button>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Gallery;
