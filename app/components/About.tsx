import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    { icon: Code2, label: '3+ Years', description: 'Experience' },
    { icon: Rocket, label: '10+ Systems', description: 'In Production' },
    { icon: Users, label: 'Millions', description: 'Of Records Handled' },
    { icon: Award, label: '90%', description: 'Effort Reduction' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-xl relative group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                    <Image
                      src="/image.png"
                      alt="Ugendran S"
                      fill
                      className="w-full h-full object-cover grayscale brightness-110 contrast-110"
                    />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Ugendran S</h3>
                  <p className="text-purple-400">Full Stack Engineer</p>
                  <p className="text-gray-400 text-sm mt-1">📍 Chennai, India</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors"
                    >
                      <item.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                      <div className="font-bold text-white">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-purple-400 font-semibold">Product-focused Full Stack Engineer</span> with over{' '}
                <span className="text-white font-semibold">3+ years</span> of experience building high-scale government and enterprise platforms.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My specialization lies in <span className="text-blue-400 font-semibold">AI-powered systems (RAG, LLMs)</span>, 
                <span className="text-purple-400 font-semibold"> microservices architecture</span>, and 
                <span className="text-white font-semibold"> performance-optimized databases</span> capable of handling millions of records seamlessly.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I've successfully delivered <span className="text-white font-semibold">10+ production systems</span> across 
                <span className="text-purple-400 font-semibold"> government, banking, healthcare, and education</span> sectors.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My core drive is efficiency—consistently reducing manual effort by{' '}
                <span className="text-blue-400 font-semibold">45–90%</span> through scalable system design, CI/CD pipelines, and workflow automation. Let's build something amazing together! 🚀
              </p>
            </div>

            {/* Key Strengths */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['Performance Optimization', 'Scalable Architecture', 'AI Integration', 'Real-World Impact'].map((strength, index) => (
                <motion.span
                  key={strength}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
