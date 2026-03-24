import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Contact: React.FC = () => {
  const { content } = useContent();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-stone-600">Have a project in mind or need expert gardening advice? We'd love to hear from you. Fill out the form below or use our contact details.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Call Us</h4>
                <p className="text-stone-600 text-sm">{content.contact.phone}</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Email Us</h4>
                <p className="text-stone-600 text-sm">{content.contact.email}</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Visit Us</h4>
                <p className="text-stone-600 text-sm">{content.contact.address}</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                  <Clock size={24} />
                </div>
                <h4 className="font-bold text-stone-900 mb-2">Opening Hours</h4>
                <p className="text-stone-600 text-sm">{content.contact.hours}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-200 rounded-[2.5rem] aspect-video overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="Map location"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div className="pr-4">
                    <p className="font-bold text-stone-900 text-sm">Medie Sydney Hill Garden</p>
                    <p className="text-xs text-stone-500">Sydney, NSW, Australia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-stone-200 border border-stone-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 uppercase tracking-wider">Full Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name.message as string}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 uppercase tracking-wider">Email Address</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message as string}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-wider">Phone Number</label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="+61 400 000 000"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 uppercase tracking-wider">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message as string}</p>}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/10 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
