import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'John Doe', role: 'CEO', image: 'assets/images/WhatsApp Image 2024-11-12 at 6.41.47 PM (1).jpeg', email: 'john.doe@example.com', linkedin: 'https://linkedin.com/in/johndoe', instagram: 'https://instagram.com/johndoe' },
  { name: 'Jane Smith', role: 'CTO', image: 'assets/images/WhatsApp Image 2024-11-12 at 6.41.47 PM.jpeg', email: 'jane.smith@example.com', linkedin: 'https://linkedin.com/in/janesmith', instagram: 'https://instagram.com/janesmith' },
  { name: 'Alice Johnson', role: 'Designer', image: 'assets/images/WhatsApp Image 2024-11-12 at 6.41.48 PM (2).jpeg', email: 'alice.johnson@example.com', linkedin: 'https://linkedin.com/in/alicejohnson', instagram: 'https://instagram.com/alicejohnson' },
  // Add more members as needed
];

export default function Team() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="team" className="py-20 bg-ivory overflow-hidden">
      <div className="container">
        {/* ... (keep existing header content) */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              style={{
                transform: `translateY(${(scrollY - index * 100) * 0.1}px)`,
              }}
            >
              <div className="aspect-w-3 aspect-h-4 mb-4">
                <div className="image-overlay">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div className="absolute inset-0 bg-taupe/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {/* ... (keep existing social links) */}
                </div>
              </div>
              {/* ... (keep existing member info) */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
