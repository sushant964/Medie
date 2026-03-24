import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../context/ContentContext';
import {
  LayoutDashboard,
  Settings,
  Image as ImageIcon,
  FileText,
  MessageSquare,
  Plus,
  Trash2,
  Save,
  LogOut,
  ChevronRight,
  Globe,
  Palette
} from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const { content, updateContent } = useContent();
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-2xl w-full max-w-md border border-stone-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <Settings size={32} />
            </div>
            <h1 className="text-2xl font-serif font-bold text-stone-900">Admin Login</h1>
            <p className="text-stone-500 text-sm">Enter your credentials to manage the site</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-widest">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 transition-all"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition-all">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        <div className="p-6 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
              <Settings size={18} />
            </div>
            <span className="font-bold text-stone-900">Admin Panel</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
            { id: 'content', icon: <Globe size={18} />, label: 'Site Content' },
            { id: 'services', icon: <FileText size={18} />, label: 'Services' },
            { id: 'projects', icon: <ImageIcon size={18} />, label: 'Portfolio' },
            { id: 'blog', icon: <MessageSquare size={18} />, label: 'Blog Posts' },
            { id: 'design', icon: <Palette size={18} />, label: 'Design' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-green-50 text-green-700'
                  : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-stone-100">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-5xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900 capitalize">{activeTab}</h2>
              <p className="text-stone-500">Manage your website's {activeTab} information</p>
            </div>
            <button className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all flex items-center gap-2 shadow-lg shadow-green-900/10">
              <Save size={18} /> Save Changes
            </button>
          </header>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Services', value: content.services.length, color: 'bg-blue-500' },
                  { label: 'Total Projects', value: content.projects.length, color: 'bg-green-500' },
                  { label: 'Blog Posts', value: content.blog.length, color: 'bg-purple-500' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                    <p className="text-stone-500 text-sm font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                    <p className="text-4xl font-serif font-bold text-stone-900">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'content' && (
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-stone-900">Hero Section</h4>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Hero Title</label>
                      <input
                        type="text"
                        defaultValue={content.hero.title}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Hero Tagline</label>
                      <textarea
                        defaultValue={content.hero.tagline}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-stone-900">Contact Info</h4>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Phone</label>
                      <input
                        type="text"
                        defaultValue={content.contact.phone}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Opening Hours</label>
                      <input
                        type="text"
                        defaultValue={content.contact.hours}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-6">
                <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                  <Plus size={18} /> Add New Service
                </button>
                <div className="grid grid-cols-1 gap-4">
                  {content.services.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-2xl border border-stone-200 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img src={service.image} className="w-16 h-16 rounded-xl object-cover" />
                        <div>
                          <h4 className="font-bold text-stone-900">{service.title}</h4>
                          <p className="text-stone-500 text-sm line-clamp-1">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-stone-400 hover:text-stone-900 transition-colors"><Settings size={18} /></button>
                        <button className="p-2 text-stone-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                  <Plus size={18} /> Add New Project
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                      <img src={project.image} className="w-full h-40 object-cover" />
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-stone-900">{project.title}</h4>
                          <p className="text-stone-500 text-xs uppercase tracking-widest">{project.category}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-stone-400 hover:text-stone-900"><Settings size={16} /></button>
                          <button className="p-2 text-stone-400 hover:text-red-600"><Trash2 size={16} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="space-y-6">
                <button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                  <Plus size={18} /> Create New Post
                </button>
                <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-stone-50 border-b border-stone-200">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-widest">Post Title</th>
                        <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-widest">Category</th>
                        <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-widest">Date</th>
                        <th className="px-6 py-4 text-xs font-bold text-stone-500 uppercase tracking-widest">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {content.blog.map((post) => (
                        <tr key={post.id} className="hover:bg-stone-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-stone-900">{post.title}</td>
                          <td className="px-6 py-4 text-sm text-stone-600">{post.category}</td>
                          <td className="px-6 py-4 text-sm text-stone-600">{post.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-3">
                              <button className="text-stone-400 hover:text-stone-900"><Settings size={16} /></button>
                              <button className="text-stone-400 hover:text-red-600"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'design' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2"><Palette size={18} /> Visual Identity</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Primary Color</label>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 bg-green-600 rounded-lg border border-stone-200" />
                        <input type="text" defaultValue="#166534" className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 text-sm" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Logo Upload</label>
                      <div className="border-2 border-dashed border-stone-200 rounded-xl p-4 text-center">
                        <button className="text-xs font-bold text-green-700 hover:underline">Click to upload logo</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2"><Globe size={18} /> SEO Tools</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Meta Title</label>
                      <input type="text" defaultValue="Medie Sydney Hill Garden | Premium Sydney Gardeners" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-500 uppercase">Meta Description</label>
                      <textarea rows={3} defaultValue="Professional gardening and landscape design services in Sydney, Australia. Transform your outdoor space today." className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2 text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};
