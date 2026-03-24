import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { ExternalLink, Search } from 'lucide-react';

export const Projects: React.FC = () => {
  const { content } = useContent();
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(content.projects.map(p => p.category)))];

  const filteredProjects = filter === 'All'
    ? content.projects
    : content.projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Our Featured Projects</h1>
          <p className="text-lg text-stone-600">Explore our portfolio of stunning garden transformations and landscape designs across Sydney.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat
                  ? 'bg-green-600 text-white shadow-lg shadow-green-900/20'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-stone-100 rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-green-400 font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-stone-300 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex gap-4">
                    <button className="bg-white text-stone-900 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                      <Search size={20} />
                    </button>
                    <button className="bg-white text-stone-900 p-3 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 italic">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};
