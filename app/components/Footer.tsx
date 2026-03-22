import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ugendran S. All rights reserved.
          </p>

          {/* Made with love */}
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> in Chennai
          </p>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
