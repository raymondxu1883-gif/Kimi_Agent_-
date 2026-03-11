import { useRef, useEffect, useState } from 'react';
import { HelpCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to create custom wedding signage?',
    answer: 'Our complete process typically takes 15-25 days from consultation to delivery. This includes 1-2 days for consultation, 3-5 days for design, 2-3 days for approval, 7-10 days for crafting, and 5-7 days for delivery. We recommend booking 1-2 months in advance to ensure timely delivery.',
  },
  {
    id: 'faq-2',
    question: 'What materials do you use for your wedding signs?',
    answer: 'We use premium clear acrylic for most of our signage, which offers a modern, elegant look. For certain products like dance floor decals, we use durable vinyl materials. All our materials are carefully selected for their quality, durability, and aesthetic appeal.',
  },
  {
    id: 'faq-3',
    question: 'Can I see a proof before production?',
    answer: 'Absolutely! After our design phase, we will provide you with 2-3 design options to choose from. Once you select a design, we will create a detailed proof for your final approval before beginning production. We want to ensure you are completely satisfied with the design before we start crafting your signage.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer free worldwide shipping on all orders. Shipping typically takes 5-7 days depending on your location. All shipments include tracking information so you can monitor the progress of your order.',
  },
  {
    id: 'faq-5',
    question: 'Can I customize the size and design of the signs?',
    answer: 'Definitely! All our products are fully customizable. You can choose from various sizes, colors, fonts, and design elements to match your wedding theme. Our design consultants will work with you to create signage that perfectly complements your special day.',
  },
  {
    id: 'faq-6',
    question: 'What is your return policy?',
    answer: 'Since all our products are custom made, we do not offer returns or refunds. However, if there is a manufacturing defect or error in your order, we will gladly replace the item free of charge. We take great pride in our craftsmanship and want you to be completely happy with your wedding signage.',
  },
  {
    id: 'faq-7',
    question: 'How do I care for my acrylic signs?',
    answer: 'Acrylic signs are easy to care for. Simply wipe them with a soft, lint-free cloth and mild soap if needed. Avoid using harsh chemicals or abrasive materials. Store them in a cool, dry place when not in use. With proper care, your acrylic signs will maintain their beauty for years to come.',
  },
  {
    id: 'faq-8',
    question: 'Can you accommodate rush orders?',
    answer: 'Yes, we offer rush services for urgent orders. Depending on the complexity of your order, we may be able to complete it in as little as 10-15 days. Rush orders are subject to an additional fee, so please contact us directly to discuss your specific timeline and requirements.',
  },
];

const FAQ = () => {
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
    <section id="faq" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blush/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium tracking-wider uppercase mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4">
            Questions
          </h2>
          <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our wedding signage services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.id} value={item.id} className="bg-ivory rounded-2xl overflow-hidden border border-gold/10">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline focus:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gold font-medium">{index + 1}</span>
                    </div>
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-11">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Support */}
        <div className={`mt-16 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-ivory rounded-2xl p-8 max-w-2xl mx-auto border border-gold/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gold" />
              </div>
            </div>
            <h3 className="font-serif text-2xl text-gray-800 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our wedding signage experts are here to help. Contact us for personalized assistance.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-all duration-300"
            >
              Contact Us
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;