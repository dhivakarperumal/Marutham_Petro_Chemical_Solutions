import { useMemo, useState } from 'react';
import PageHeader from '../../CommonComponents/PageHeader';
import productData from '../../data/product.json';

const categories = ['All', ...new Set(productData.map((product) => product.category))];

const categoryImages = {
  'Enamel Thinner': '/images/gallery/img_1.png',
  'Paint Thinner': '/images/gallery/img_2.png',
  'Solvent Thinner': '/images/gallery/img_3.png',
  'NC Thinner': '/images/gallery/img_4.png',
};

const galleryItems = categories.slice(1).map((category) => ({
  title: category,
  category,
  image: categoryImages[category],
}));

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
