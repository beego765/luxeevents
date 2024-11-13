import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-ivory">
      <div className="absolute inset-0 z-0">
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
          className="relative text-center p-8 rounded-lg bg-white/70 shadow-lg"
        >
          <h1
            className="text-6xl md:text-8xl font-heading font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-light to-gold-dark"
          >
            Crafting Unforgettable Moments
          </h1>
          <p
            className="text-2xl md:text-3xl font-body font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-light to-gold-dark"
          >
            Since 1970
          </p>
          <p className="text-xl md:text-2xl font-body font-bold text-black/80">
            Imagine an event so stunning, it's unforgettable. Welcome to The Luxe Events Co.—your
            partner in luxury event décor.
          </p>
          <a
            href="#portfolio"
            className="btn-primary inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-gold text-black shadow-xl hover:bg-opacity-80"
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
        <ChevronDown className="w-8 h-8 text-quality-black" />
      </motion.div>
    </section>
  );
}
