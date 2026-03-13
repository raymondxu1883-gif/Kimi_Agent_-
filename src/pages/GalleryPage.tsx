import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Elegant Gold Wedding Sign',
    description: 'A stunning gold foil wedding welcome sign with elegant calligraphy.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20gold%20wedding%20welcome%20sign%20with%20calligraphy&image_size=landscape_4_3',
    category: 'Welcome Signs'
  },
  {
    id: 2,
    title: 'Rustic Wooden Wedding Sign',
    description: 'Handcrafted wooden wedding sign with a natural finish and personalized details.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rustic%20wooden%20wedding%20sign%20with%20natural%20finish&image_size=landscape_4_3',
    category: 'Rustic'
  },
  {
    id: 3,
    title: 'Acrylic Wedding Sign',
    description: 'Modern acrylic wedding sign with laser-cut details and gold accents.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20acrylic%20wedding%20sign%20with%20gold%20accents&image_size=landscape_4_3',
    category: 'Modern'
  },
  {
    id: 4,
    title: 'Vintage Wedding Table Sign',
    description: 'Vintage-inspired table number sign with floral details.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vintage%20wedding%20table%20number%20sign%20with%20floral%20details&image_size=landscape_4_3',
    category: 'Table Signs'
  },
  {
    id: 5,
    title: 'Geometric Wedding Sign',
    description: 'Contemporary geometric wedding sign with metallic finish.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contemporary%20geometric%20wedding%20sign%20with%20metallic%20finish&image_size=landscape_4_3',
    category: 'Modern'
  },
  {
    id: 6,
    title: 'Floral Wedding Welcome Sign',
    description: 'Beautiful welcome sign adorned with fresh flowers and greenery.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=floral%20wedding%20welcome%20sign%20with%20fresh%20flowers&image_size=landscape_4_3',
    category: 'Welcome Signs'
  },
  {
    id: 7,
    title: 'Chalkboard Wedding Menu Sign',
    description: 'Hand-drawn chalkboard menu sign with artistic lettering.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chalkboard%20wedding%20menu%20sign%20with%20artistic%20lettering&image_size=landscape_4_3',
    category: 'Menu Signs'
  },
  {
    id: 8,
    title: 'Luxury Wedding Signage',
    description: 'High-end wedding sign with premium materials and intricate details.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20wedding%20signage%20with%20intricate%20details&image_size=landscape_4_3',
    category: 'Luxury'
  },
  {
    id: 9,
    title: 'Beach Wedding Sign',
    description: 'Coastal-themed wedding sign with seashells and beachy details.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beach%20wedding%20sign%20with%20seashells%20and%20coastal%20theme&image_size=landscape_4_3',
    category: 'Themed'
  },
  {
    id: 10,
    title: 'Winter Wedding Sign',
    description: 'Festive winter wedding sign with snowflakes and icy details.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=winter%20wedding%20sign%20with%20snowflakes%20and%20icy%20details&image_size=landscape_4_3',
    category: 'Themed'
  },
  {
    id: 11,
    title: 'Minimalist Wedding Sign',
    description: 'Clean and simple minimalist wedding sign with modern typography.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20wedding%20sign%20with%20modern%20typography&image_size=landscape_4_3',
    category: 'Modern'
  },
  {
    id: 12,
    title: 'Rustic Barn Wedding Sign',
    description: 'Farmhouse-style wedding sign perfect for barn venues.',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rustic%20barn%20wedding%20sign%20with%20farmhouse%20style&image_size=landscape_4_3',
    category: 'Rustic'
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const openLightbox = (item: GalleryItem) => {
    setLightboxImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wedding%20signs%20collage%20background%20blurred&image_size=landscape_16_9')] bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our collection of beautiful wedding signs and inspiration
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-gold text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
                    <span className="bg-gold bg-opacity-90 px-4 py-2 rounded-full text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-serif font-semibold mb-1 text-gray-800 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Need Something Custom?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? We create custom wedding signs tailored to your unique vision.
          </p>
          <button className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors duration-300">
            Get a Custom Quote
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[90vh] flex flex-col md:flex-row gap-6 bg-white rounded-xl overflow-hidden">
            <div className="md:w-2/3 h-64 md:h-auto">
              <img 
                src={lightboxImage.image} 
                alt={lightboxImage.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/3 p-6 flex flex-col justify-center">
              <span className="inline-block bg-gold text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                {lightboxImage.category}
              </span>
              <h3 className="text-2xl font-serif font-bold mb-3 text-gray-800">
                {lightboxImage.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {lightboxImage.description}
              </p>
              <button className="px-4 py-2 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors duration-300">
                Enquire About This Style
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;