import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { Shield, Sprout, Heart, Target } from 'lucide-react';

export const About: React.FC = () => {
  const { content } = useContent();

  const values = [
    { icon: <Shield size={32} />, title: "Quality Workmanship", desc: "We never cut corners. Every project is executed with precision and care." },
    { icon: <Sprout size={32} />, title: "Sustainability", desc: "We prioritize eco-friendly methods and native plants to support local biodiversity." },
    { icon: <Heart size={32} />, title: "Customer Satisfaction", desc: "Your happiness is our priority. We work closely with you to exceed expectations." },
    { icon: <Target size={32} />, title: "Attention to Detail", desc: "From the smallest shrub to the largest landscape, we focus on the finer details." }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8">About Medie Sydney Hill Garden</h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                {content.about.story}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-green-600">
                  <h4 className="font-bold text-stone-900 mb-2">Our Mission</h4>
                  <p className="text-sm text-stone-600">{content.about.mission}</p>
                </div>
                <div className="bg-stone-50 p-6 rounded-2xl border-l-4 border-green-600">
                  <h4 className="font-bold text-stone-900 mb-2">Our Vision</h4>
                  <p className="text-sm text-stone-600">{content.about.vision}</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop"
                alt="Our Team"
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-50 rounded-full -z-0" />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <p className="text-stone-400">The principles that guide every garden we touch and every client we serve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-green-900/50">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Meet Our Experts</h2>
            <p className="text-stone-600">The passionate individuals behind Sydney's most beautiful gardens.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Marcus Hill", role: "Owner & Lead Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "Landscape Architect", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
              { name: "David Chen", role: "Lead Gardener", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
              { name: "Sarah Thompson", role: "Plant Care Specialist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/5]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold text-stone-900">{member.name}</h4>
                <p className="text-green-700 font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
