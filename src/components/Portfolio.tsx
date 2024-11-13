import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  { 
    id: 1, 
    title: 'Event 1', 
    category: 'Wedding', 
    image: '/src/assets/images/event1.jpeg' 
  },
  { 
    id: 2, 
    title: 'Event 2', 
    category: 'Corporate', 
    image: '/src/assets/images/event2.jpeg' 
  },
  { 
    id: 3, 
    title: 'Event 3', 
    category: 'Special Occasion', 
    image: '/src/assets/images/event3.jpeg' 
  },
  { 
    id: 4, 
    title: 'Event 4', 
    category: 'Wedding', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.47 PM (1).jpeg' 
  },
  { 
    id: 5, 
    title: 'Event 5', 
    category: 'Corporate', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.47 PM.jpeg' 
  },
  { 
    id: 6, 
    title: 'Event 6', 
    category: 'Special Occasion', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.48 PM (2).jpeg' 
  },
  { 
    id: 7, 
    title: 'Event 7', 
    category: 'Wedding', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.48 PM.jpeg' 
  },
  { 
    id: 8, 
    title: 'Event 8', 
    category: 'Corporate', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.49 PM (1).jpeg' 
  },
  { 
    id: 9, 
    title: 'Event 9', 
    category: 'Special Occasion', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.49 PM (2).jpeg' 
  },
  { 
    id: 10, 
    title: 'Event 10', 
    category: 'Wedding', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.49 PM (3).jpeg' 
  },
  { 
    id: 11, 
    title: 'Event 11', 
    category: 'Corporate', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.49 PM (4).jpeg' 
  },
  { 
    id: 12, 
    title: 'Event 12', 
    category: 'Special Occasion', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.49 PM.jpeg' 
  },
  { 
    id: 13, 
    title: 'Event 13', 
    category: 'Wedding', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.50 PM (3).jpeg' 
  },
  { 
    id: 14, 
    title: 'Event 14', 
    category: 'Corporate', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.50 PM.jpeg' 
  },
  { 
    id: 15, 
    title: 'Event 15', 
    category: 'Special Occasion', 
    image: '/src/assets/images/WhatsApp Image 2024-11-12 at 6.41.51 PM.jpeg' 
  }
];
export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredItems = portfolioItems.filter(
    _item => true // No filtering needed as selectedCategory is removed
  );

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden">
      {/* ... (keep existing header content) */}

      <motion.div layout className="image-gallery relative">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              style={{
                transform: `translateY(${(scrollY - item.id * 100) * 0.1}px)`,
              }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <div className="image-overlay">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110 rounded-full"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-taupe/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-heading">{item.title}</h3>
                  <p className="text-sm font-body">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ... (keep existing lightbox code) */}
    </section>
  );
}
