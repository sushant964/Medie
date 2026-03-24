import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Professional Services</h1>
          <p className="text-lg text-stone-600">From routine maintenance to complete landscape transformations, we provide expert care for every aspect of your garden.</p>
        </div>

        <div className="space-y-24">
          {content.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-[2.5rem] shadow-2xl w-full aspect-video object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <p className="font-bold text-2xl">100%</p>
                    <p className="text-xs uppercase tracking-widest">Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <span className="text-green-600 font-bold text-sm uppercase tracking-widest">Service 0{index + 1}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">{service.title}</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Expert Consultation", "Premium Materials", "Skilled Team", "Guaranteed Results"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Check size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Service Gallery */}
                {service.gallery && service.gallery.length > 0 && (
                  <div className="pt-4">
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Service Gallery</p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.gallery.map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="aspect-square rounded-2xl overflow-hidden shadow-sm"
                        >
                          <img
                            src={img}
                            alt={`${service.title} gallery ${i + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3.5 rounded-full font-bold hover:bg-green-800 transition-all shadow-lg shadow-green-900/10"
                  >
                    Request a Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-32 bg-stone-50 rounded-[3rem] p-12 md:p-20 border border-stone-200">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Need a custom solution?</h2>
              <p className="text-lg text-stone-600">We understand that every garden is different. If you have a specific project in mind that isn't listed here, get in touch and we'll create a tailored plan just for you.</p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <Link to="/contact" className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold hover:bg-stone-800 transition-all">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
