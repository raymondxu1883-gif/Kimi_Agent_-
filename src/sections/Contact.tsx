import { useRef, useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Instagram, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri 9AM-6PM EST',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@elegantsigns.com',
    description: 'Reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Studio',
    content: '123 Design Street, New York',
    description: 'By appointment only',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri 9AM-6PM EST',
    description: 'Weekends by request',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    message: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mojnblvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="font-script text-xl text-gray-500 max-w-2xl mx-auto">
            We look forward to creating your dream wedding signage together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gold font-medium text-sm mb-1">{item.content}</p>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Social & Extra */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="font-serif text-xl text-gray-800 mb-4">Follow Us</h3>
              <p className="text-gray-500 text-sm mb-6">
                Follow us on social media for wedding inspiration and exclusive offers
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
                >
                  <Heart className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-elegant-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-800 mb-4">Thank You!</h3>
                  <p className="text-gray-500 mb-6">
                    We have received your inquiry. Our wedding consultant will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        weddingDate: '',
                        message: '',
                      });
                    }}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-white"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl text-gray-800 mb-2">Free Consultation</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Fill in your details below to receive a custom quote and design proposal
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-gray-200 focus:border-gold focus:ring-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="border-gray-200 focus:border-gold focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          className="border-gray-200 focus:border-gold focus:ring-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weddingDate" className="text-gray-700">
                          Wedding Date
                        </Label>
                        <Input
                          id="weddingDate"
                          name="weddingDate"
                          type="date"
                          value={formData.weddingDate}
                          onChange={handleChange}
                          className="border-gray-200 focus:border-gold focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your vision - wedding theme, preferred style, products you're interested in..."
                        rows={4}
                        className="border-gray-200 focus:border-gold focus:ring-gold resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold-dark text-white py-6 rounded-full font-medium transition-all"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </span>
                      )}
                    </Button>

                    <p className="text-center text-gray-400 text-xs">
                      By submitting, you agree to our Privacy Policy. We promise to protect your personal information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
