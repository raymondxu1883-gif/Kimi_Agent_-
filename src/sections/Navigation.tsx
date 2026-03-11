import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-elegant py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('/');
              }}
              className="flex items-center gap-2 group"
            >
              <Heart
                className={`w-6 h-6 transition-colors duration-300 ${
                  isScrolled ? 'text-gold' : 'text-white'
                } group-hover:scale-110 transition-transform`}
                fill="currentColor"
              />
              <span
                className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Elegant Signs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  aria-label={`Navigate to ${link.name} section`}
                  tabIndex={0}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <button
                onClick={() => scrollToSection('/contact')}
                className="px-6 py-2.5 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold-dark transition-colors duration-300 shadow-elegant"
                aria-label="Get a quote"
                tabIndex={0}
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-3 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              tabIndex={0}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8" role="navigation" aria-label="Mobile navigation">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-2xl font-serif text-gray-800 hover:text-gold transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={`Navigate to ${link.name} section`}
              tabIndex={0}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => scrollToSection('/contact')}
            className="mt-4 px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors duration-300"
            aria-label="Get a quote"
            tabIndex={0}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
