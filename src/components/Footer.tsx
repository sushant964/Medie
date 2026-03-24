import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
              <Leaf size={24} />
            </div>
            <span className="font-serif text-xl font-bold text-white">Medie Sydney Hill</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Transforming Sydney's outdoor spaces into living art. We specialize in premium landscape design and meticulous garden maintenance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-green-400 transition-colors">Our Services</Link></li>
            <li><Link to="/projects" className="hover:text-green-400 transition-colors">Featured Projects</Link></li>
            <li><Link to="/blog" className="hover:text-green-400 transition-colors">Gardening Blog</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-4 text-sm">
            {content.services.map(service => (
              <li key={service.id}>
                <Link to="/services" className="hover:text-green-400 transition-colors">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Details</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-green-500 shrink-0" />
              <span>{content.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-green-500 shrink-0" />
              <span>{content.contact.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-green-500 shrink-0" />
              <span>{content.contact.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-green-500 shrink-0" />
              <span>{content.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Medie Sydney Hill Garden. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <Link to="/admin" className="hover:text-white">Admin Login</Link>
        </div>
      </div>
    </footer>
  );
};
