import { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Sparkles, CheckCircle, MapPin, Calendar, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    description: 'Crafted from premium clear acrylic with elegant metal stand, creating an unforgettable first impression for your wedding entrance. Personalize with names, date, and welcome message. Our acrylic welcome signs are made from high-quality materials that are designed to last, ensuring your special day is remembered for years to come.',
    price: 'From $95',
    image: './images/product-welcome-sign.jpg',
    features: ['Premium clear acrylic', 'Gold/silver metal stand', 'Personalized text', 'Multiple sizes available', 'Weather resistant', 'Indoor/outdoor use', 'Professional design service'],
  },
  {
    id: 2,
    name: 'Table Number Cards',
    category: 'table',
    description: 'Elegant table number cards with gold foil numbers on clear modern design, guiding guests to their seats with understated luxury. These table numbers are perfect for weddings, corporate events, and special occasions. Each card is carefully crafted to ensure a perfect finish that complements any table setting.',
    price: 'From $5 each',
    image: './images/product-table-numbers.jpg',
    features: ['Clear acrylic material', 'Gold foil printing', 'Numbers 1-50 available', 'Matching stands included', 'Scratch resistant', 'Easy to clean', 'Uniform size and design'],
  },
  {
    id: 3,
    name: 'Place Cards',
    category: 'place',
    description: 'Personalized place cards for each guest with beautiful calligraphy-style fonts, showing your attention to every detail. These place cards add a touch of elegance to your table setting and help guests find their seats with ease. Each card is custom printed with your guests\' names in the font of your choice.',
    price: 'From $4 each',
    image: './images/product-place-cards.jpg',
    features: ['Personalized name customization', 'Multiple font options', 'Clear acrylic stands', 'Bulk discounts', 'Professional printing', 'Sturdy construction', 'Matching design options'],
  },
  {
    id: 4,
    name: 'Dance Floor Decal',
    category: 'dancefloor',
    description: 'Custom dance floor decal featuring your names or monogram at the center of the dance floor, becoming the romantic focal point of your reception. Our dance floor decals are made from high-quality, non-slip material that is safe for all dance floor surfaces. They are easy to apply and remove without leaving any residue.',
    price: 'From $180',
    image: './images/product-dancefloor-decal.jpg',
    features: ['Durable non-slip material', 'Custom pattern design', 'Professional installation', 'Easy to clean', 'Resistant to wear and tear', 'Suitable for all floor types', 'Weather resistant for outdoor use'],
  },
  {
    id: 5,
    name: 'Seating Chart Display',
    category: 'seating',
    description: 'Beautiful seating chart display to help guests find their seats quickly. Arrange by table layout or alphabetical order. Our seating charts are designed to be both functional and beautiful, serving as a decorative element while helping guests navigate your event with ease.',
    price: 'From $125',
    image: './images/product-seating-chart.jpg',
    features: ['Large display size', 'Clear layout design', 'Gold stand included', 'Reusable design', 'Customizable layout', 'Professional printing', 'Easy to update'],
  },
  {
    id: 6,
    name: 'Bar Sign',
    category: 'bar',
    description: 'Elegant bar sign for your wedding reception, showcasing signature cocktail menus or the couple\'s favorite drink recommendations. Our bar signs are designed to complement any bar setup, adding a touch of sophistication to your beverage station. They are perfect for displaying drink menus, signature cocktails, or special messages.',
    price: 'From $55',
    image: './images/product-bar-sign.jpg',
    features: ['Signature menu display', 'Elegant typography', 'Clear acrylic material', 'Tabletop stand', 'Customizable content', 'Water resistant', 'Easy to clean'],
  },
  {
    id: 7,
    name: 'Monogram Sign',
    category: 'welcome',
    description: 'Custom monogram sign featuring your initials in an elegant design, perfect for your wedding entrance or reception space. Our monogram signs are a beautiful way to personalize your event and create a cohesive look throughout your venue. They can be used as a focal point at your entrance, behind the head table, or as a photo backdrop.',
    price: 'From $85',
    image: './images/hero-welcome-sign.jpg',
    features: ['Custom monogram design', 'Premium acrylic', 'Multiple sizes', 'Gold/silver options', 'Wall mountable', 'Free design consultation', 'Quick turnaround time'],
  },
  {
    id: 8,
    name: 'Wedding Program Holder',
    category: 'table',
    description: 'Elegant acrylic holders for your wedding programs, adding a touch of sophistication to your ceremony. These holders keep your programs neatly displayed and easily accessible for guests. They are designed to complement any wedding theme and can be reused for other events.',
    price: 'From $3 each',
    image: './images/product-table-numbers.jpg',
    features: ['Clear acrylic', 'Sturdy design', 'Multiple styles', 'Bulk discounts', 'Stackable for easy storage', 'Scratch resistant', 'Uniform size'],
  },
  {
    id: 9,
    name: 'Photo Booth Backdrop',
    category: 'decoration',
    description: 'Custom photo booth backdrop with your names and wedding date, creating the perfect backdrop for memorable photos. Our backdrops are made from high-quality materials that provide a professional look for your photo booth. They are easy to set up and can be reused for other events.',
    price: 'From $150',
    image: './images/gallery-1.jpg',
    features: ['Custom design', 'High-quality material', 'Easy to install', 'Reusable', 'Wrinkle resistant', 'Multiple size options', 'Professional printing'],
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

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const product = products.find(p => p.id === parseInt(id || '0'));

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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ChevronLeft className="w-10 h-10 text-gray-400" />
          </div>
          <h1 className="font-serif text-2xl text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-500 mb-6">
            The product you are looking for does not exist or has been removed.
          </p>
          <Button
            onClick={() => navigate('/products')}
            className="bg-gold text-white hover:bg-gold-dark"
          >
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
            <ChevronLeft className="w-4 h-4 text-white/60 transform rotate-180" />
            <a href="/products" className="text-white/80 hover:text-white transition-colors">Products</a>
            <ChevronLeft className="w-4 h-4 text-white/60 transform rotate-180" />
            <span className="text-white font-medium">{product.name}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium mb-2">
            {product.name}
          </h1>
          <p className="font-script text-lg text-white/90 mb-4">
            {categories.find(c => c.id === product.category)?.name}
          </p>
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold text-xl px-6 py-2 rounded-full">
            {product.price}
          </span>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      className="w-full h-24 object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white rounded-2xl p-8 shadow-elegant">
                <h2 className="font-serif text-3xl text-gray-800 mb-4">{product.name}</h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-gold font-semibold text-2xl">{product.price}</span>
                  <button className="p-2 bg-gold/10 rounded-full text-gold hover:bg-gold hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-800 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Each piece is meticulously crafted by our team of skilled artisans, ensuring the highest quality and attention to detail. We use only the finest materials to create wedding signage that will be cherished for years to come.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-gold text-white hover:bg-gold-dark py-4 rounded-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Get Custom Quote
                    </span>
                  </Button>
                  <Button
                    onClick={() => navigate('/products')}
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white py-4 rounded-full"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ChevronLeft className="w-5 h-5" />
                      Back to Products
                    </span>
                  </Button>
                </div>
              </div>

              {/* Delivery Info */}
              <div className={`mt-8 bg-white rounded-2xl p-6 shadow-elegant transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-medium text-gray-800 mb-4">Delivery Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-sm text-gray-500">Production Time</p>
                      <p className="font-medium text-gray-800">7-10 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-sm text-gray-500">Shipping</p>
                      <p className="font-medium text-gray-800">Standard: 3-5 business days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold" />
                    <div>
                      <p className="text-sm text-gray-500">Customer Support</p>
                      <p className="font-medium text-gray-800">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Frequently Asked
            </span>
            <h2 className="font-serif text-3xl text-gray-800 mb-4">
              Common Questions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Here are some answers to common questions about our wedding signage products
            </p>
          </div>

          <div className={`space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              {
                question: 'Can I customize the design?',
                answer: 'Yes! All our products are fully customizable. You can choose colors, fonts, sizes, and add your personal details like names, dates, and special messages.'
              },
              {
                question: 'How long does production take?',
                answer: 'Production typically takes 7-10 business days, depending on the complexity of the design. Rush orders may be available for an additional fee.'
              },
              {
                question: 'What materials do you use?',
                answer: 'We use high-quality clear acrylic for most of our products, which is durable, weather-resistant, and has a beautiful, premium appearance.'
              },
              {
                question: 'Do you offer samples?',
                answer: 'Yes, we offer sample kits for a small fee. This allows you to see the quality and materials before placing a larger order.'
              },
              {
                question: 'How do I care for my acrylic signs?',
                answer: 'Acrylic signs can be cleaned with a soft, lint-free cloth and mild soap and water. Avoid using harsh chemicals or abrasive materials that could scratch the surface.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-ivory rounded-xl p-6 hover:shadow-elegant transition-shadow">
                <h3 className="font-medium text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gold/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl p-8 shadow-elegant text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-gold" />
            </div>
            <h2 className="font-serif text-3xl text-gray-800 mb-4">
              Ready to Create Your Perfect Wedding Signage?
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our team of experts help bring your vision to life. We'll work with you every step of the way to create signage that perfectly matches your wedding theme and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-gold text-white hover:bg-gold-dark px-8 py-4 rounded-full"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;