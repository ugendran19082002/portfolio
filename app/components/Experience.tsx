import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, Code, Rocket, Shield, Sparkles } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code,
      title: 'Microservices Architecture',
      description: 'Built 6+ enterprise apps reducing manual processing by 60%',
    },
    {
      icon: Rocket,
      title: 'Payment Integrations',
      description: 'Integrated Razorpay, Worldline, CCAvenue for 10k+ users',
    },
    {
      icon: Shield,
      title: 'API Optimization',
      description: 'Optimized Oracle/PostgreSQL queries, improving response by 40%',
    },
    {
      icon: Sparkles,
      title: 'AI Engineering',
      description: 'Built RAG system reducing report generation time by 90%',
    },
  ];

  const responsibilities = [
    'Built 6+ enterprise web applications across government, healthcare, and education using microservices architecture.',
    'Integrated Razorpay, Worldline, and CCAvenue payment gateways for 10,000+ users, reducing payment failure rate by 30%.',
    'Designed system architecture and optimized RESTful APIs and Oracle/PostgreSQL queries for ERP workflows, improving response times by 40%.',
    'Built RAG-based AI reporting system trained on 50,000+ documents — reduced report generation time by 90% at 95% accuracy.',
    'Set up CI/CD pipelines and worked directly with government and enterprise clients to deliver production-grade systems on time.',
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
              Experience & Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Software Developer
                    </h3>
                    <p className="text-xl text-purple-400 mb-3">
                      Muthu Soft Labs
                    </p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>2023 - Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Chennai, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors"
                      >
                        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                          <highlight.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-white text-sm mb-1">
                            {highlight.title}
                          </h5>
                          <p className="text-gray-400 text-xs">
                            {highlight.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                  <div className="space-y-3">
                    {responsibilities.map((responsibility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{responsibility}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js',
                      'Node.js',
                      'CakePHP 5',
                      'PostgreSQL',
                      'Oracle DB',
                      'Microservices',
                      'AI / RAG',
                      'AWS & Docker',
                      'REST APIs',
                      'Payment Gateways',
                      'CI/CD Pipelines'
                    ].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Dot */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex justify-center my-8"
          >
            <div className="w-2 h-16 bg-gradient-to-b from-purple-500/50 to-transparent rounded-full" />
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    B.E. – Electronics & Communication Engineering
                  </h3>
                  <p className="text-xl text-blue-400 mb-3">
                    NSN College of Technology
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>2019 - 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Karur, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
