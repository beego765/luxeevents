import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles, Clock, Gift, Image } from 'lucide-react';

const services = [
  {
    icon: Calendar,
    title: 'Wedding Planning',
    description: 'From intimate ceremonies to grand celebrations, we create your perfect wedding day.',
    price: 'Starting at $5,000',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description: 'Elevate your business events with our professional planning services.',
    price: 'Starting at $3,500',
  },
  {
    icon: Sparkles,
    title: 'Social Gatherings',
    description: 'Make your special occasions truly memorable with our expert touch.',
    price: 'Starting at $2,500',
  },
  {
    icon: Clock,
    title: 'Day-Of Coordination',
    description: 'Ensure your event runs smoothly with our experienced coordinators.',
    price: 'Starting at $1,500',
  },
  {
    icon: Gift,
    title: 'Luxury Balloon Installations',
    description: 'Bringing sophistication to your venue with handcrafted arches and garlands tailored to your theme.',
    price: 'Starting at $2,000',
  },
  {
    icon: Image,
    title: 'Bespoke Backdrops',
    description: 'Chic, customized centerpieces perfect for unforgettable photos and cherished memories.',
    price: 'Starting at $1,500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Exceptional events tailored to your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-taupe/80 mb-4">
                {service.description}
              </p>
              <p className="text-gold font-heading text-lg">
                {service.price}
              </p>
              <button className="mt-4 w-full btn-primary">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
