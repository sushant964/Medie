import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export const Home: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={content.hero.image}
            alt="Beautiful Garden"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block px-4 py-1.5 bg-green-600/90 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Sydney's Premium Gardeners
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-stone-100 font-light">
              {content.hero.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-green-900/20"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Professional Services</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6" />
            <p className="text-stone-600">We offer a comprehensive range of gardening and landscaping solutions to keep your outdoor spaces beautiful and healthy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                  <Link to="/services" className="text-green-700 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop"
                alt="Gardener at work"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-100 rounded-3xl -z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-stone-100 rounded-full -z-0" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">Why Choose Medie Sydney Hill Garden?</h2>
            <div className="space-y-6">
              {[
                { title: "Experienced Team", desc: "Our gardeners are highly skilled with years of local Sydney experience." },
                { title: "Eco-Friendly Practices", desc: "We use sustainable methods and organic products whenever possible." },
                { title: "Reliable Service", desc: "We pride ourselves on punctuality and consistent high-quality results." },
                { title: "Customized Solutions", desc: "Every garden is unique, and we tailor our approach to your specific needs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-stone-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/about" className="inline-block bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-green-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10">
          <Quote size={300} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-green-100">Don't just take our word for it—hear from our satisfied customers across Sydney.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{t.content}"</p>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-green-300">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-stone-100 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="grid grid-cols-10 gap-4">
                {[...Array(100)].map((_, i) => (
                  <Leaf key={i} size={24} className="text-green-900" />
                ))}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6 relative z-10">Ready to transform your garden?</h2>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto relative z-10">Get in touch today for a free consultation and quote. Let's make your outdoor dreams a reality.</p>
            <Link
              to="/contact"
              className="inline-block bg-green-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-green-700 transition-all shadow-xl shadow-green-900/20 relative z-10"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
