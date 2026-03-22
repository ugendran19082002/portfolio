import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import Image from 'next/image';
export function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ugendran19082002', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/s-ugendran8428882777/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ugendransakthivel@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading (Letter-by-Letter) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight flex flex-wrap justify-center lg:justify-start  w-full">
              {"Ugendran S".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + index * 0.05,
                    type: "spring",
                    damping: 12,
                    stiffness: 100
                  }}
                  className={`inline-block ${char === ' ' ? 'w-4 sm:w-8' : ''} bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle (Word-by-Word) */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 flex flex-wrap justify-center lg:justify-start gap-x-2">
              {"Full Stack Engineer | AI-Integrated Systems | Enterprise".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className={word === "AI-Integrated" || word === "Enterprise" || word === "|" || word === "Systems" ? "text-purple-400 font-medium" : "text-gray-300"}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Building Scalable Systems, AI Solutions & Enterprise Platforms that directly drive business impact and user satisfaction.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Standing Photo container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Decorative background for the photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform lg:-rotate-6"></div>

            {/* Photo Container */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
              style={{ perspective: 1000 }}
              className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl z-10 cursor-pointer"
            >
              {/* Note: The user replaces this image with their standing photo */}
              <Image
                src="/image.png"
                alt="Standing Photo"
                fill
                className="w-full h-full object-cover object-center bg-zinc-800"
                priority
              />

              {/* Glowing overlay border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-purple-500/40 transition-colors pointer-events-none"></div>
            </motion.div>

            {/* Floating badges around photo */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-0 lg:-right-6 bg-black/60 backdrop-blur-md border border-purple-500/30 p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-0 lg:-left-6 bg-black/60 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl shadow-xl z-20 hidden sm:block"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 lg:mt-24 flex justify-center w-full relative z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
