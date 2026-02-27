import { useRef, useEffect, useState } from 'react';
import { ZoomIn, MapPin, Calendar, Users } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  couple: string;
  date: string;
  location: string;
  guests: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: '/images/gallery-1.jpg',
    title: 'Royal Palace Wedding',
    couple: 'Sarah & Michael',
    date: 'June 2024',
    location: 'The Peninsula Shanghai',
    guests: '200 guests',
    description: 'Featuring gold and ivory as the main color palette, paired with crystal chandeliers and exquisite floral arrangements, creating a royal palace-like luxurious atmosphere. We created a complete acrylic signage system for this celebration.',
  },
  {
    id: 2,
    image: '/images/gallery-2.jpg',
    title: 'French Garden Wedding',
    couple: 'Emma & William',
    date: 'May 2024',
    location: 'Four Seasons Hangzhou',
    guests: '150 guests',
    description: 'In a beautiful garden setting where pink roses intertwine with greenery, our transparent welcome sign perfectly blended into the natural environment.',
  },
  {
    id: 3,
    image: '/images/gallery-3.jpg',
    title: 'Modern Minimalist Wedding',
    couple: 'Lisa & David',
    date: 'April 2024',
    location: 'Rosewood Beijing',
    guests: '120 guests',
    description: 'Minimalist design style with the perfect pairing of white and gold, where every table number showcased understated luxury and refined taste.',
  },
  {
    id: 4,
    image: '/images/gallery-4.jpg',
    title: 'Romantic Crystal Ballroom',
    couple: 'Anna & James',
    date: 'March 2024',
    location: 'The St. Regis Shenzhen',
    guests: '300 guests',
    description: 'The custom dance floor decal became the focal point of the entire venue, with the couple\'s names in gold letters shining brilliantly under crystal lighting.',
  },
  {
    id: 5,
    image: '/images/wedding-scene-1.jpg',
    title: 'Tuscan Romance',
    couple: 'Sophie & Marco',
    date: 'February 2024',
    location: 'The Temple House Chengdu',
    guests: '180 guests',
    description: 'Italian Tuscan style with warm sunlit tones, our acrylic signage added the perfect finishing touch to this romantic wedding.',
  },
  {
    id: 6,
    image: '/images/hero-welcome-sign.jpg',
    title: 'Classic European Wedding',
    couple: 'Victoria & Edward',
    date: 'January 2024',
    location: 'The Ritz-Carlton Guangzhou',
    guests: '250 guests',
    description: 'Classic European style where gold decorations complemented white floral arrangements beautifully, with the welcome sign becoming a popular photo spot for guests.',
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4">
            Wedding Gallery
          </h2>
          <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
            Every story deserves to be remembered, every wedding is a unique work of art
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index === 0 || index === 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 || index === 5 ? 'aspect-[16/10] md:aspect-[3/4]' : 'aspect-[3/4]'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold-light text-sm font-medium mb-2">
                    {item.couple}
                  </p>
                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                  <div className="flex items-center gap-4 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-500 text-sm">
            More beautiful weddings await. Contact us to learn more.
          </p>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedItem && (
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-8 bg-white">
                <div className="mb-6">
                  <p className="text-gold font-medium mb-2">{selectedItem.couple}</p>
                  <h3 className="font-serif text-3xl text-gray-800 mb-4">{selectedItem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Wedding Date</p>
                      <p className="font-medium">{selectedItem.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Venue</p>
                      <p className="font-medium">{selectedItem.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Guests</p>
                      <p className="font-medium">{selectedItem.guests}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
                >
                  Inquire About Similar Design
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
