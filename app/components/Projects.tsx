import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link?: string;
  github?: string;
  gradient: string;
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: Project[] = [
    {
      title: 'Government Survey Dashboard (Big Data & AI)',
      description: 'Analytics dashboard processing millions of survey records across districts and states with AI auto-generation.',
      tech: ['Express.js', 'PostgreSQL', 'RAG AI', 'TypeScript'],
      features: ['Auto-generates survey insights reducing reporting time by 75%', 'Streaming APIs handling 10M+ records (<300ms response)', 'Optimized PostgreSQL with partitioning and materialized views'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Textbook ERP Management System',
      description: 'Government-level ERP system for textbook procurement, inventory tracking, and distribution.',
      tech: ['React.js', 'Node.js', 'Oracle DB', 'TypeScript'],
      features: ['Cut procurement cycle time by 45%', 'Statewide inventory across 500+ distribution points', 'Real-time stock visibility and forecasting'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'POS Mathi – Cart & Payment Platform',
      description: 'District and state-level vendor e-commerce and payment settlement platform.',
      tech: ['Next.js', 'NestJS', 'Tailwind', 'Oracle DB'],
      features: ['Role-based access for admins and vendors', 'Reduced manual settlement effort by 50%', 'High-volume concurrent transaction processing'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Academic Resource Management System',
      description: 'Comprehensive academic management platform for educational institutions.',
      tech: ['CakePHP 5', 'MySQL', 'AJAX', 'Tailwind CSS'],
      features: ['Automated timetable generation', 'Library management modules for 5,000+ students', 'Real-time resource and asset tracking'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Urban House Management System',
      description: 'End-to-end housing platform covering listings, tenant onboarding, and payment processing.',
      tech: ['React.js', 'Express.js', 'PostgreSQL', 'Payments'],
      features: ['Automated rent collection and maintenance requests', 'Sub-200ms API response times', 'Seamless tenant onboarding workflows'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'COE – Examinations Management System',
      description: 'Controller of Examinations automation platform for large-scale student management.',
      tech: ['CakePHP 5', 'MySQL', 'Tailwind CSS', 'AJAX'],
      features: ['Exam registration and hall ticket generation', 'Results processing for 15,000+ students', 'Cut admin turnaround from days to hours'],
      gradient: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Enterprise-level applications built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300 flex flex-col">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />

                <div className="relative flex-1 flex flex-col">
                  {/* Gradient Bar */}
                  <div className={`h-1 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-xs flex items-start gap-2">
                        <span className={`inline-block w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2`}>
                      <ExternalLink size={16} />
                      View Details
                    </button>
                    {project.github && (
                      <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300">
                        <Github size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
