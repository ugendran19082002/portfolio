import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code, Server, Brain, Database, Wrench, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: any;
  title: string;
  color: string;
  skills: Skill[];
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories: SkillCategory[] = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js & Next.js', level: 96 },
        { name: 'TypeScript & JavaScript (ES6+)', level: 90 },
        { name: 'Tailwind CSS & Bootstrap', level: 95 },
        { name: 'HTML5 & CSS3', level: 94 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Engineering',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js (Express, NestJS)', level: 95 },
        { name: 'CakePHP 5 & PHP', level: 92 },
        { name: 'FastAPI & Python', level: 88 },
        { name: 'RESTful APIs & Microservices', level: 94 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'RAG & LLM Integration', level: 95 },
        { name: 'Transformer Models', level: 85 },
        { name: 'Python (PyTorch, Pandas, NumPy)', level: 88 },
        { name: 'Generative AI Engineering', level: 92 },
      ],
    },
    {
      icon: Database,
      title: 'Databases & Architecture',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'PostgreSQL & MySQL', level: 94 },
        { name: 'Oracle DB', level: 88 },
        { name: 'System Design & Scalability', level: 90 },
        { name: 'Partitioning & Indexing', level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-blue-600 to-indigo-600',
      skills: [
        { name: 'AWS Infrastructure', level: 85 },
        { name: 'Docker & Containerization', level: 88 },
        { name: 'CI/CD Pipelines & Ubuntu Linux', level: 85 },
        { name: 'Git & Version Control', level: 92 },
      ],
    },
    {
      icon: Wrench,
      title: 'Integrations & Tools',
      color: 'from-yellow-500 to-amber-500',
      skills: [
        { name: 'Payments (Razorpay, Worldline, CCAvenue)', level: 92 },
        { name: 'AI Assistants (Copilot, Claude, ChatGPT)', level: 95 },
        { name: 'Automation (n8n, Stitch AI)', level: 85 },
        { name: 'Design (Figma AI)', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />

              <div className="relative">
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, color, delay, isInView }: { skill: Skill; color: string; delay: number; isInView: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm">{skill.name}</span>
        <span className="text-gray-400 text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${progress}%` : 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
