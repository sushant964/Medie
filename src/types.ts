export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface SiteContent {
  hero: {
    title: string;
    tagline: string;
    image: string;
  };
  about: {
    story: string;
    mission: string;
    vision: string;
  };
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  services: Service[];
  projects: Project[];
  blog: BlogPost[];
  testimonials: Testimonial[];
}

export const initialContent: SiteContent = {
  hero: {
    title: "Medie Sydney Hill Garden",
    tagline: "Transforming Outdoor Spaces into Living Art",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1920&auto=format&fit=crop"
  },
  about: {
    story: "Founded in the heart of Sydney, Medie Sydney Hill Garden began with a simple passion for nature and a vision to bring premium landscaping to Australian homes. Our journey started with small garden cleanups and has grown into a full-service landscape design firm.",
    mission: "To create sustainable, beautiful, and functional outdoor environments that enhance the quality of life for our clients.",
    vision: "To be Sydney's leading choice for innovative landscape design and meticulous garden care."
  },
  contact: {
    address: "Sydney, Australia",
    phone: "+61 2 9000 0000",
    email: "info@mediesydneyhill.com.au",
    hours: "Monday to Friday, 9:30 AM – 3:30 PM"
  },
  services: [
    {
      id: "1",
      title: "Garden Maintenance",
      description: "Regular upkeep, pruning, and cleaning to keep your garden thriving all year round.",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: "2",
      title: "Landscape Design",
      description: "Custom outdoor space design tailored to your lifestyle and aesthetic preferences.",
      image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1590059132718-502194895944?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584479898061-15742e14f50d?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: "3",
      title: "Lawn Care",
      description: "Expert mowing, fertilizing, and restoration services for a perfectly lush green lawn.",
      image: "https://images.unsplash.com/photo-1533460004989-cef01064af7c?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: "4",
      title: "Planting & Installation",
      description: "Careful selection and installation of flowers, shrubs, and trees for your unique climate.",
      image: "https://images.unsplash.com/photo-1416870262648-255f02fedc80?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      id: "5",
      title: "Garden Cleanups",
      description: "Seasonal or one-time cleaning to restore your garden's beauty and health.",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Modern Minimalist Backyard",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?q=80&w=800&auto=format&fit=crop",
      description: "A complete transformation of a suburban backyard into a sleek, modern retreat."
    },
    {
      id: "2",
      title: "Native Australian Garden",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
      description: "Showcasing the beauty of local flora with a low-maintenance native garden design."
    }
  ],
  blog: [
    {
      id: "1",
      title: "5 Tips for a Thriving Sydney Garden",
      excerpt: "Discover how to manage the unique Sydney climate for a beautiful year-round garden.",
      content: "Sydney's climate can be challenging... (full content here)",
      date: "2024-03-20",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
      category: "Tips"
    }
  ],
  testimonials: [
    {
      id: "1",
      name: "Sarah Jenkins",
      role: "Homeowner",
      content: "The team transformed our messy backyard into a paradise. Highly recommended!",
      rating: 5
    }
  ]
};
