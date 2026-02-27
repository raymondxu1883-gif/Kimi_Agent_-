import { Heart, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Welcome Signs', href: '#products' },
      { name: 'Table Numbers', href: '#products' },
      { name: 'Place Cards', href: '#products' },
      { name: 'Dance Floor Decals', href: '#products' },
      { name: 'Seating Charts', href: '#products' },
    ],
    services: [
      { name: 'Our Process', href: '#process' },
      { name: 'Design Consultation', href: '#contact' },
      { name: 'Portfolio', href: '#gallery' },
      { name: 'Reviews', href: '#testimonials' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-gold" fill="currentColor" />
              <span className="font-serif text-xl font-semibold">Elegant Signs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Specializing in premium wedding signage customization. With exquisite craftsmanship and unique design, we create timeless memories for your special day.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-xs">Mon-Fri 9AM-6PM EST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">hello@elegantsigns.com</p>
                  <p className="text-gray-500 text-xs">Reply within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">123 Design Street</p>
                  <p className="text-gray-500 text-xs">New York, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Elegant Signs. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-gold" fill="currentColor" />
              <span>for your special day</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
