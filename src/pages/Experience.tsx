import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience:React.FC = () => {
  const experiences = [
    {
      title: "Business Strategy Intern",
      company: "Global Consulting Firm",
      location: "New York, NY",
      period: "Summer 2023",
      description: "Led strategic analysis projects for Fortune 500 clients, developing market entry strategies and competitive analysis reports.",
      achievements: [
        "Developed market analysis report that led to 15% increase in client's market share",
        "Collaborated with cross-functional teams on digital transformation projects",
        "Created financial models for business valuation and ROI analysis"
      ]
    },
    {
      title: "Marketing Analytics Associate",
      company: "Tech Startup",
      location: "San Francisco, CA",
      period: "2022 - 2023",
      description: "Managed data-driven marketing campaigns and conducted market research to identify growth opportunities.",
      achievements: [
        "Increased conversion rates by 25% through optimization of marketing funnel",
        "Implemented new analytics tools resulting in improved reporting efficiency",
        "Led a team of 3 interns in market research projects"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Professional Experience
          </h1>
          <p className="text-lg text-gray-400 mt-2">My Journey in the Business World</p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
                    <p className="text-purple-400 font-semibold mt-1">{exp.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-400">
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </motion.div>
                      <motion.div 
                        className="flex items-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </motion.div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mt-4">{exp.description}</p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white">Key Achievements</h3>
                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-purple-500 mt-2 mr-3" />
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;