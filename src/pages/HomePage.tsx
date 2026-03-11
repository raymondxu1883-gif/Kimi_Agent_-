import Hero from '../sections/Hero';
import Products from '../sections/Products';
import Process from '../sections/Process';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default HomePage;