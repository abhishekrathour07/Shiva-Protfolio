import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Link as LinkIcon, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Market Expansion Strategy",
      category: "Strategic Management",
      description:
        "Developed comprehensive market entry strategy for a retail chain expanding into Southeast Asian markets.",
      tags: ["Market Analysis", "Financial Modeling", "Strategic Planning"],
      link: "#",
    },
    {
      title: "Supply Chain Optimization",
      category: "Operations Management",
      description:
        "Led a team project to optimize supply chain operations for a manufacturing company, resulting in 20% cost reduction.",
      tags: ["Supply Chain", "Process Optimization", "Cost Analysis"],
      link: "#",
    },
    {
      title: "Digital Transformation Initiative",
      category: "Technology Management",
      description:
        "Designed and implemented digital transformation strategy for a traditional retail business.",
      tags: ["Digital Strategy", "Change Management", "Technology Implementation"],
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Projects
          </h1>
          <p className="text-lg text-gray-400 mt-2">Showcasing My Business Impact</p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      className="text-sm font-medium text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.category}
                    </motion.span>
                    <motion.a
                      href={project.link}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <LinkIcon className="w-5 h-5" />
                    </motion.a>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center text-sm text-gray-300 bg-gray-700/50 px-2 py-1 rounded-full"
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: "rgba(128,90,213,0.5)",
                          color: "white",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
