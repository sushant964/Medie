import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone, Clock, MapPin } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { cn } from '../lib/utils';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { content } = useContent();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="bg-stone-900 text-stone-100 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-green-400" /> {content.contact.address}</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-green-400" /> {content.contact.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-green-400" /> {content.contact.phone}
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Leaf size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none text-stone-900">Medie Sydney Hill</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-green-700 font-semibold">Garden Specialists</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                location.pathname === link.path ? "text-green-600" : "text-stone-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-800 transition-all shadow-lg shadow-green-900/10"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-stone-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === link.path ? "text-green-600" : "text-stone-600"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-green-700 text-white px-6 py-3 rounded-xl text-center font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
};
