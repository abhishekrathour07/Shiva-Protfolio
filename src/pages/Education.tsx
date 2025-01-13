import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education:React.FC = () => {
  const education = [
    {
      degree: "Master of Business Administration",
      institution: "Babu Banarsi Das University",
      year: "2023 - Present",
      description: "Specializing in Strategic Management and Business Analytics",
      achievements: [
        "Dean's List - All semesters",
        "President of Business Analytics Club",
        "Winner of Annual Business Case Competition"
      ]
    },
    {
      degree: "Bachelor of Science",
      institution: "Aara University",
      year: "2017 - 2021",
      description: "Mathematics Physcis and Science",
      achievements: [
        "Graduated with First Class ",
        "Student Council Representative",
        "Organising many Events"
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
            <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Education</h1>
          <p className="text-lg text-gray-400 mt-2">My Academic Journey</p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"
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
                    <h2 className="text-2xl font-bold text-white">{edu.degree}</h2>
                    <p className="text-blue-400 font-semibold mt-1">{edu.institution}</p>
                    <p className="text-gray-400 mt-1">{edu.year}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BookOpen className="w-8 h-8 text-blue-400 mt-4 md:mt-0" />
                  </motion.div>
                </div>

                <p className="text-gray-300 mt-4">{edu.description}</p>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-400" />
                    Key Achievements
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3" />
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

export default Education;