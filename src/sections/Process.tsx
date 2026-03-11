import { useRef, useEffect, useState } from 'react';
import { MessageCircle, Palette, FileCheck, Truck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Consultation',
    description: 'Speak with our design consultant about your wedding theme, color palette, and personalization needs. Get professional advice tailored to your vision.',
    duration: '1-2 days',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description: 'Our designers create exclusive design drafts based on your requirements, providing 2-3 style options for you to choose from.',
    duration: '3-5 days',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Approval',
    description: 'We refine the design based on your feedback and confirm the final artwork before beginning the careful crafting of your exclusive signage.',
    duration: '2-3 days',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Crafting',
    description: 'Using premium acrylic materials and exquisite craftsmanship, each piece undergoes strict quality inspection.',
    duration: '7-10 days',
  },
  {
    icon: Truck,
    number: '05',
    title: 'Delivery',
    description: 'Professional packaging ensures safe delivery. Free worldwide shipping with tracking, so you can await your beautiful pieces with peace of mind.',
    duration: '5-7 days',
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="process" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4">
            Our Process
          </h2>
          <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
            Five simple steps to bring your dream wedding signage to life
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="group bg-ivory rounded-2xl p-6 h-full hover:bg-white hover:shadow-elegant-lg hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gold/20">
                  {/* Icon & Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-elegant flex items-center justify-center group-hover:bg-gold group-hover:shadow-elegant-lg transition-all duration-300">
                      <step.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors" />
                    </div>
                    <span className="absolute -top-2 -right-2 font-serif text-3xl text-gold/20 font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl text-gray-800 mb-3 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gold text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                    Est. time: {step.duration}
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 z-10">
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 bg-ivory rounded-full px-8 py-4">
            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div className="text-left">
              <p className="text-gray-800 font-medium">Total Timeline: 15-25 Days</p>
              <p className="text-gray-500 text-sm">We recommend booking 1-2 months in advance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
