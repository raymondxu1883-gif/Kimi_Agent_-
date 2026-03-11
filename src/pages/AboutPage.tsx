import { useRef, useEffect, useState } from 'react';
import { ChevronRight, Heart, Users, Award, Star, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
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

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Designer',
      image: './images/gallery-1.jpg',
      bio: 'With over 10 years of experience in wedding design, Sarah founded Elegant Signs to bring her passion for creating beautiful, personalized wedding signage to couples worldwide.'
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: './images/gallery-2.jpg',
      bio: 'Michael brings his expertise in graphic design and branding to ensure every piece we create is not only beautiful but also perfectly aligned with each couple\'s unique style.'
    },
    {
      name: 'Emma Wilson',
      role: 'Production Manager',
      image: './images/gallery-3.jpg',
      bio: 'Emma oversees our production process, ensuring that every sign is crafted to perfection with the highest quality materials and attention to detail.'
    },
    {
      name: 'David Lee',
      role: 'Client Relations',
      image: './images/gallery-4.jpg',
      bio: 'David works closely with our clients to understand their vision and ensure a seamless experience from initial consultation to final delivery.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Couples' },
    { number: '1000+', label: 'Custom Pieces' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./images/hero-welcome-sign.jpg"
            alt="Elegant Wedding Signs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">About Us</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium mb-4">
            Our Story
          </h1>
          <p className="font-script text-xl text-white/90 max-w-2xl mx-auto">
            Crafting beautiful wedding signage that tells your unique love story
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
                Our Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-800 mb-6">
                The Elegant Signs Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It all began with a simple idea: to create wedding signage that is as unique and special as the couples we serve. Founded in 2019, Elegant Signs started as a small home-based business with a passion for craftsmanship and attention to detail.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the years, we've grown into a trusted name in wedding stationery, known for our high-quality acrylic signs and personalized designs. Each piece we create is handmade with love and care, ensuring that every detail is perfect for your special day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to help couples create unforgettable moments through beautiful, custom signage that reflects their unique style and love story. We believe that every wedding deserves to be celebrated with pieces that are as special as the occasion itself.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="./images/product-welcome-sign.jpg"
                  alt="Welcome sign"
                  className="w-full h-64 object-cover rounded-xl shadow-elegant"
                  loading="lazy"
                />
                <img
                  src="./images/product-seating-chart.jpg"
                  alt="Seating chart"
                  className="w-full h-48 object-cover rounded-xl shadow-elegant"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="./images/product-dancefloor-decal.jpg"
                  alt="Dance floor decal"
                  className="w-full h-48 object-cover rounded-xl shadow-elegant"
                  loading="lazy"
                />
                <img
                  src="./images/product-table-numbers.jpg"
                  alt="Table numbers"
                  className="w-full h-64 object-cover rounded-xl shadow-elegant"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="font-serif text-3xl sm:text-4xl text-gold font-semibold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Meet Our Team
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-800 mb-4">
              The Faces Behind Elegant Signs
            </h2>
            <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
              Our dedicated team is passionate about creating beautiful wedding signage for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-elegant transition-all duration-700 hover:shadow-elegant-lg hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'We are passionate about creating beautiful, meaningful pieces that capture the essence of your special day.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every detail, from design to craftsmanship, ensuring the highest quality products.'
              },
              {
                icon: Star,
                title: 'Creativity',
                description: 'We bring creativity and innovation to every project, creating unique designs that reflect your personal style.'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'We put our clients at the center of everything we do, providing personalized service and attention to detail.'
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: 'We are committed to delivering on our promises, ensuring your order is completed on time and to your satisfaction.'
              },
              {
                icon: MapPin,
                title: 'Sustainability',
                description: 'We are committed to sustainable practices, using eco-friendly materials and processes whenever possible.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-ivory rounded-2xl p-8 transition-all duration-700 hover:shadow-elegant ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;