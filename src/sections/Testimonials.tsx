import { useRef, useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  weddingDate: string;
  products: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & Michael',
    role: 'June 2024 Wedding',
    avatar: 'S',
    content: 'From consultation to delivery, the entire process was absolutely delightful. The designer listened patiently to our ideas, and the final design exceeded all our expectations! The quality of the welcome sign and table numbers was exceptional, and our guests couldn\'t stop complimenting them.',
    rating: 5,
    weddingDate: 'June 2024',
    products: ['Welcome Sign', 'Table Numbers', 'Place Cards'],
  },
  {
    id: 2,
    name: 'Emma & William',
    role: 'April 2024 Wedding',
    avatar: 'E',
    content: 'The dance floor decal was the highlight of our wedding! The gold letters sparkled beautifully under the lights, and the photos turned out absolutely stunning. The craftsmanship was incredibly detailed and perfectly matched our vision.',
    rating: 5,
    weddingDate: 'April 2024',
    products: ['Dance Floor Decal', 'Welcome Sign'],
  },
  {
    id: 3,
    name: 'Lisa & David',
    role: 'March 2024 Wedding',
    avatar: 'L',
    content: 'An incredibly professional team! Our wedding theme was vintage, and the designer perfectly understood our needs. The signage had a vintage feel while maintaining modern elegance. Delivery was prompt and the packaging was so thoughtful.',
    rating: 5,
    weddingDate: 'March 2024',
    products: ['Full Signage Package'],
  },
  {
    id: 4,
    name: 'Anna & James',
    role: 'January 2024 Wedding',
    avatar: 'A',
    content: 'Amazing value for money! We compared many vendors, and this team offered the best design and service. The seating chart was so beautifully crafted that we now have it displayed in our home as a keepsake. Highly recommended!',
    rating: 5,
    weddingDate: 'January 2024',
    products: ['Seating Chart', 'Table Numbers', 'Bar Sign'],
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-32 h-32 text-gold" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-180">
        <Quote className="w-32 h-32 text-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4">
            What Couples Say
          </h2>
          <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
            Thank you to every couple for trusting us to be part of your special day
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-ivory rounded-2xl p-8 hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center text-gold font-serif text-xl font-semibold group-hover:bg-gold group-hover:text-white transition-colors">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Products */}
                <div className="flex flex-wrap gap-2">
                  {testimonial.products.map((product, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gold/20"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="lg:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-ivory rounded-2xl p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold font-serif text-lg font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 text-sm">{testimonial.name}</h4>
                            <p className="text-gray-500 text-xs">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        "{testimonial.content}"
                      </p>

                      {/* Products */}
                      <div className="flex flex-wrap gap-2">
                        {testimonial.products.map((product, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white rounded-full text-xs text-gray-600 border border-gold/20"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-elegant flex items-center justify-center text-gray-600 hover:text-gold hover:shadow-elegant-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-gold w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-elegant flex items-center justify-center text-gray-600 hover:text-gold hover:shadow-elegant-lg transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '100%', label: 'Satisfaction' },
            { value: '4.9', label: 'Average Rating' },
            { value: '500+', label: 'Happy Reviews' },
            { value: '98%', label: 'Would Recommend' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-3xl sm:text-4xl text-gold font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
