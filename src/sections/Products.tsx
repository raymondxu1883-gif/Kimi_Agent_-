import { useState, useRef, useEffect } from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Acrylic Welcome Sign',
    category: 'welcome',
    description: 'Crafted from premium clear acrylic with elegant metal stand, creating an unforgettable first impression for your wedding entrance. Personalize with names, date, and welcome message.',
    price: 'From $95',
    image: './images/product-welcome-sign.jpg',
    features: ['Premium clear acrylic', 'Gold/silver metal stand', 'Personalized text', 'Multiple sizes available'],
  },
  {
    id: 2,
    name: 'Table Number Cards',
    category: 'table',
    description: 'Elegant table number cards with gold foil numbers on clear modern design, guiding guests to their seats with understated luxury.',
    price: 'From $5 each',
    image: './images/product-table-numbers.jpg',
    features: ['Clear acrylic material', 'Gold foil printing', 'Numbers 1-50 available', 'Matching stands included'],
  },
  {
    id: 3,
    name: 'Place Cards',
    category: 'place',
    description: 'Personalized place cards for each guest with beautiful calligraphy-style fonts, showing your attention to every detail.',
    price: 'From $4 each',
    image: './images/product-place-cards.jpg',
    features: ['Personalized name customization', 'Multiple font options', 'Clear acrylic stands', 'Bulk discounts'],
  },
  {
    id: 4,
    name: 'Dance Floor Decal',
    category: 'dancefloor',
    description: 'Custom dance floor decal featuring your names or monogram at the center of the dance floor, becoming the romantic focal point of your reception.',
    price: 'From $180',
    image: './images/product-dancefloor-decal.jpg',
    features: ['Durable non-slip material', 'Custom pattern design', 'Professional installation', 'Easy to clean'],
  },
  {
    id: 5,
    name: 'Seating Chart Display',
    category: 'seating',
    description: 'Beautiful seating chart display to help guests find their seats quickly. Arrange by table layout or alphabetical order.',
    price: 'From $125',
    image: './images/product-seating-chart.jpg',
    features: ['Large display size', 'Clear layout design', 'Gold stand included', 'Reusable design'],
  },
  {
    id: 6,
    name: 'Bar Sign',
    category: 'bar',
    description: 'Elegant bar sign for your wedding reception, showcasing signature cocktail menus or the couple\'s favorite drink recommendations.',
    price: 'From $55',
    image: './images/product-bar-sign.jpg',
    features: ['Signature menu display', 'Elegant typography', 'Clear acrylic material', 'Tabletop stand'],
  },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'welcome', name: 'Welcome Signs' },
  { id: 'table', name: 'Table Numbers' },
  { id: 'dancefloor', name: 'Dance Floor' },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Our Collection
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4">
            Product Collection
          </h2>
          <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
            Each piece carries our pursuit of perfection, adding unique charm to your wedding
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold text-white shadow-elegant'
                  : 'bg-white text-gray-600 hover:bg-gold/10 hover:text-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-elegant hover-lift transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-3 bg-white rounded-full text-gray-800 hover:bg-gold hover:text-white transition-colors duration-300"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white rounded-full text-gray-800 hover:bg-gold hover:text-white transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                  {categories.find((c) => c.id === product.category)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-gray-800 mb-2 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold text-lg">{product.price}</span>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-gold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-medium rounded-full hover:bg-gold hover:text-white transition-all duration-300"
          >
            Get Full Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-gray-800">
                      {selectedProduct.name}
                    </DialogTitle>
                    <DialogDescription className="text-gold font-semibold text-xl mt-2">
                      {selectedProduct.price}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-800 mb-3">Product Features</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-6">
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        const element = document.querySelector('#contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
                    >
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
