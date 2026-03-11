import { useEffect, useRef } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          (el as HTMLElement).style.transform = `translateY(${scrollY * 0.4}px)`;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax">
        <img
          src="./images/hero-welcome-sign.jpg"
          alt="Elegant Wedding Welcome Sign"
          className="w-full h-full object-cover scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border border-gold/30 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/10 rounded-full animate-float opacity-20" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in-down">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
            Premium Wedding Stationery
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight mb-4 sm:mb-6 animate-fade-in-up">
          <span className="block">Make Your Wedding</span>
          <span className="block mt-2 text-gold-light italic">Unforgettable</span>
        </h1>

        {/* Subtitle */}
        <p className="font-script text-base sm:text-lg md:text-xl text-white/90 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Exquisite Acrylic Signs · Custom Design · Timeless Memories
        </p>

        {/* Description */}
        <p className="text-white/70 text-xs sm:text-sm max-w-xs sm:max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          From welcome signs to table numbers, from dance floor decals to seating charts,
          <br className="hidden sm:block" />
          we craft every detail for your special day.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('#products')}
            className="group px-8 py-4 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-all duration-300 shadow-elegant-lg flex items-center gap-2"
          >
            Explore Collection
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            Free Consultation
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {[
            { number: '500+', label: 'Happy Couples' },
            { number: '1000+', label: 'Custom Pieces' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-2xl sm:text-3xl text-gold-light font-semibold">
                {stat.number}
              </div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
};

export default Hero;
