import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Gardening Tips & Inspiration</h1>
          <p className="text-lg text-stone-600">Expert advice, seasonal guides, and landscaping ideas from our professional team.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {content.blog.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-8 aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-green-700 uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 text-xs text-stone-500 font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-green-600" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={14} className="text-green-600" /> By Marcus Hill</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-all"
                >
                  Read Full Article <ArrowRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Search */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
              <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Search Blog</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
              <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-wider text-sm">Categories</h4>
              <ul className="space-y-4">
                {['Garden Care', 'Landscaping', 'Plant Guides', 'Seasonal Tips', 'Lawn Maintenance'].map(cat => (
                  <li key={cat}>
                    <a href="#" className="flex items-center justify-between text-stone-600 hover:text-green-700 transition-colors group">
                      <span className="text-sm font-medium">{cat}</span>
                      <span className="text-xs bg-stone-200 px-2 py-1 rounded-md group-hover:bg-green-100 group-hover:text-green-700 transition-all">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-green-900 p-8 rounded-3xl text-white">
              <h4 className="font-bold mb-4 text-lg">Join Our Newsletter</h4>
              <p className="text-sm text-green-100 mb-6">Get monthly gardening tips and exclusive offers delivered to your inbox.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-green-300 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
                <button className="w-full bg-white text-green-900 font-bold py-3 rounded-xl hover:bg-green-100 transition-colors">
                  Subscribe Now
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
