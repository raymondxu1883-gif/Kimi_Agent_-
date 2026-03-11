import { useState, useRef, useEffect } from 'react';
import { Eye, Heart, ArrowRight, Search, ChevronRight, Filter, SortAsc, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  {
    id: 7,
    name: 'Monogram Sign',
    category: 'welcome',
    description: 'Custom monogram sign featuring your initials in an elegant design, perfect for your wedding entrance or reception space.',
    price: 'From $85',
    image: './images/hero-welcome-sign.jpg',
    features: ['Custom monogram design', 'Premium acrylic', 'Multiple sizes', 'Gold/silver options'],
  },
  {
    id: 8,
    name: 'Wedding Program Holder',
    category: 'table',
    description: 'Elegant acrylic holders for your wedding programs, adding a touch of sophistication to your ceremony.',
    price: 'From $3 each',
    image: './images/product-table-numbers.jpg',
    features: ['Clear acrylic', 'Sturdy design', 'Multiple styles', 'Bulk discounts'],
  },
  {
    id: 9,
    name: 'Photo Booth Backdrop',
    category: 'decoration',
    description: 'Custom photo booth backdrop with your names and wedding date, creating the perfect backdrop for memorable photos.',
    price: 'From $150',
    image: './images/gallery-1.jpg',
    features: ['Custom design', 'High-quality material', 'Easy to install', 'Reusable'],
  },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'welcome', name: 'Welcome Signs' },
  { id: 'table', name: 'Table Numbers' },
  { id: 'dancefloor', name: 'Dance Floor' },
  { id: 'seating', name: 'Seating' },
  { id: 'bar', name: 'Bar Signs' },
  { id: 'decoration', name: 'Decorations' },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

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

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-80 sm:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./images/hero-welcome-sign.jpg"
            alt="Elegant Wedding Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Products</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-4">
            Our Product Collection
          </h1>
          <p className="font-script text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Exquisite wedding signage crafted with passion and attention to detail
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative w-full sm:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 bg-white/95 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent shadow-sm transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={sectionRef} className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Sort */}
          <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Categories
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.id
                        ? 'bg-gold text-white shadow-elegant'
                        : 'bg-white text-gray-600 hover:bg-gold/10 hover:text-gold'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <SortAsc className="w-4 h-4" />
                Sort by
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 sm:w-48 border-gray-200 focus:border-gold focus:ring-gold">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gold hover:text-white transition-colors duration-300"
                      aria-label="View product details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gold hover:text-white transition-colors duration-300"
                      aria-label="Add to favorites"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {categories.find((c) => c.id === product.category)?.name}
                  </div>
                  {/* New Badge */}
                  {product.id > 6 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-white rounded-full text-xs font-medium">
                      New
                    </div>
                  )}
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

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find any products matching your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Call to Action */}
          {filteredProducts.length > 0 && (
            <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-elegant">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-gray-800 mb-4">Ready to Create Your Dream Wedding?</h3>
                <p className="text-gray-500 mb-6">
                  Contact us for a custom quote and let our team bring your vision to life.
                </p>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-all duration-300 shadow-elegant"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

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
                    loading="lazy"
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
                        scrollToContact();
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
    </div>
  );
};

export default ProductsPage;