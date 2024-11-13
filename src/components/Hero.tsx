import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 z-0 parallax-wrapper"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="radial-gradient" />
      </div>

      <div className="container relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-quality-black mb-6 relative">
              <span className="relative z-10 text-black text-opacity-80 shadow-lg">Crafting Unforgettable Moments</span>
              <span className="absolute inset-0 text-black text-opacity-50 text-6xl md:text-8xl font-heading font-bold -z-10">Crafting Unforgettable Moments</span>
            </h1>
            <p className="text-2xl md:text-3xl font-body text-metallic-gold/90 mb-8 relative">
              <span className="relative z-10 text-black text-opacity-80 shadow-lg">Since 1970</span>
              <span className="absolute inset-0 text-black text-opacity-50 text-2xl md:text-3xl font-body -z-10">Since 1970</span>
            </p>
            <p className="text-xl md:text-2xl font-body text-metallic-gold/90 mb-8 relative">
              <span className="relative z-10 text-black text-opacity-80 shadow-lg">Imagine an event so stunning, it’s unforgettable. Welcome to The Luxe Events Co.—your partner in luxury event décor.</span>
              <span className="absolute inset-0 text-black text-opacity-50 text-xl md:text-2xl font-body -z-10">Imagine an event so stunning, it’s unforgettable. Welcome to The Luxe Events Co.—your partner in luxury event décor.</span>
            </p>
          </div>
          <a
            href="#portfolio"
            className="btn-primary inline-flex items-center gap-2 mt-8"
          >
            Explore Our Work
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-metallic-gold" />
      </motion.div>
    </section>
  );
}
