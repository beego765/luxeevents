import { Crown, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-quality-black to-metallic-gold text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="w-8 h-8 text-white" />
              <span className="font-heading text-2xl text-white">The Luxe Events Co.</span>
            </div>
            <p className="text-white/80 mb-6">
              Crafting unforgettable moments and creating extraordinary experiences since 1970.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Portfolio', 'Services', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4 text-white">Contact Hours</h3>
            <ul className="space-y-2 text-white/80">
              <li>Monday - Friday</li>
              <li>9:00 AM - 6:00 PM</li>
              <li>Saturday</li>
              <li>10:00 AM - 4:00 PM</li>
              <li>Sunday</li>
              <li>By Appointment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} The Luxe Events Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
