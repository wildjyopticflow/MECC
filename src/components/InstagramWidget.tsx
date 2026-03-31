import { Instagram, ArrowRight } from 'lucide-react';

const INSTAGRAM_POSTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=600&q=80', alt: 'Premium mobile detailing Montreal' },
  { id: 2, image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=600&q=80', alt: 'Luxury car interior cleaning' },
  { id: 3, image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=600&q=80', alt: 'Ceramic coating application' },
  { id: 4, image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80', alt: 'MTL Exclusive sports car detail' },
  { id: 5, image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80', alt: 'Custom wheel detail reflection' },
  { id: 6, image: 'https://images.unsplash.com/photo-1503376712351-1c43f721c5f3?auto=format&fit=crop&w=600&q=80', alt: 'Front grille paint correction' }
];

export default function InstagramWidget() {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="h-px w-12 bg-brand-accent"></span>
              <span className="text-brand-accent tracking-[0.2em] uppercase text-sm font-semibold">
                Follow The Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Latest Work
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Follow our daily pursuit of automotive perfection.
            </p>
          </div>
          
          <a 
            href="https://www.instagram.com/mecc_detailing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center space-x-3 text-white hover:text-brand-accent transition-colors duration-300"
          >
            <div className="glass p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Instagram size={20} />
            </div>
            <span className="font-semibold tracking-wider text-sm uppercase">@mecc_detailing</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <a 
              key={post.id}
              href="https://www.instagram.com/mecc_detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-black block"
            >
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2 text-white font-medium">
                  <Instagram size={24} />
                  <span>View on Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
