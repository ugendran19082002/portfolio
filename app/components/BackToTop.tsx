import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
}
