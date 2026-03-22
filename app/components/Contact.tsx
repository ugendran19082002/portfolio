import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from 'lucide-react';
import { sendEmail } from '../actions';
import { toast } from 'sonner';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ugendransakthivel@gmail.com',
      href: 'mailto:ugendransakthivel@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8428882777',
      href: 'tel:+918428882777',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ugendran19082002',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/s-ugendran8428882777/',
      color: 'hover:text-blue-400',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const result = await sendEmail(formData);
        
        if (result.success) {
          toast.success('Message sent successfully! I will get back to you soon.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          toast.error('Failed to send message. Please try again later.');
          console.error('Send error:', result.error);
        }
      } catch (error) {
        toast.error('An unexpected error occurred. Please try again.');
        console.error('Catch error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Let's Build Something Great
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out for collaborations, project discussions, or just a friendly chat about technology.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className={`p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-400 ${social.color} hover:border-purple-500/50 transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.subject ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                  placeholder="Project Collaboration"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
