import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & James Thompson',
    role: 'Wedding Clients',
    image: 'https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'The Luxe Events Co. turned our dream wedding into reality. Every detail was perfect, and their attention to our vision was remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Corporate Client',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Their expertise in corporate event planning is unmatched. Our annual conference was flawlessly executed and received rave reviews.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Charity Gala Host',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Working with The Luxe Events Co. was a dream. They helped us raise record funds while creating an unforgettable experience.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What our clients say about us</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-ivory p-6 rounded-sm shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/20" />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading font-semibold text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gold">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-taupe/80 italic">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}