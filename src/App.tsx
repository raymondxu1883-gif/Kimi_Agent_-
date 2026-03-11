import { lazy, Suspense } from 'react';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';

// 懒加载组件
const Hero = lazy(() => import('./sections/Hero'));
const Products = lazy(() => import('./sections/Products'));
const Process = lazy(() => import('./sections/Process'));
const Gallery = lazy(() => import('./sections/Gallery'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Hero />
          <Suspense fallback={<div className="py-24 flex items-center justify-center">Loading products...</div>}>
            <Products />
          </Suspense>
          <Suspense fallback={<div className="py-24 flex items-center justify-center">Loading process...</div>}>
            <Process />
          </Suspense>
          <Suspense fallback={<div className="py-24 flex items-center justify-center">Loading gallery...</div>}>
            <Gallery />
          </Suspense>
          <Suspense fallback={<div className="py-24 flex items-center justify-center">Loading testimonials...</div>}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<div className="py-24 flex items-center justify-center">Loading FAQ...</div>}>
            <FAQ />
          </Suspense>
          <Suspense fallback={<div className="py-24 flex items-center justify-center">Loading contact...</div>}>
            <Contact />
          </Suspense>
        </Suspense>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
