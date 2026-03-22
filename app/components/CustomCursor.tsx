'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springing for the outer animated circle
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(0, springConfig);
  const cursorYSpring = useSpring(0, springConfig);

  useEffect(() => {
    // Check if device has a touch screen (we don't want custom cursors on mobile)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorXSpring.set(e.clientX);
      cursorYSpring.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide native cursor globally when this script runs
    document.body.style.cursor = 'none';
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(styleElement);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
      document.head.removeChild(styleElement);
    };
  }, [cursorXSpring, cursorYSpring, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Background ambient glow tracking the spring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Outer ring with smooth spring physics */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/50 backdrop-blur-[2px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovering ? 60 : 36,
          height: isHovering ? 60 : 36,
        }}
        animate={{
          backgroundColor: isHovering ? 'rgba(96, 165, 250, 0.1)' : 'rgba(0, 0, 0, 0)',
          border: isHovering ? '1px solid rgba(96, 165, 250, 0.5)' : '1px solid rgba(147, 51, 234, 0.5)',
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.15,
        }}
      >
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold tracking-widest text-purple-400 uppercase"
          >
            Click
          </motion.div>
        )}
      </motion.div>

      {/* Small dot tracking exact cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 0 : 1, // Hide dot when hovering to let ring dominate
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
    </>
  );
}
