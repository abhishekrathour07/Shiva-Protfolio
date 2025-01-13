import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, Mail } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <img
              src="/profile.jpeg"
              alt="Professional headshot"
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Shiwanka Singh
            </motion.h1>
            <motion.h2 
              className="text-2xl text-blue-400 font-semibold"
              variants={itemVariants}
            >
              MBA Candidate
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Passionate MBA student with a focus on strategic management and business analytics. 
              Combining analytical thinking with creative problem-solving to drive business growth 
              and innovation. Seeking opportunities to leverage my skills in a dynamic business environment.
            </motion.p>

            <motion.div 
              className="flex space-x-6"
              variants={itemVariants}
            >
              {[
                { icon: LinkedinIcon, href: "https://linkedin.com", color: "hover:text-blue-400" },
                { icon: GithubIcon, href: "https://github.com", color: "hover:text-purple-400" },
                { icon: Mail, href: "mailto:contact@example.com", color: "hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="pt-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Strategic Management',
                  'Business Analytics',
                  'Financial Analysis',
                  'Project Management',
                  'Leadership',
                  'Market Research'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;