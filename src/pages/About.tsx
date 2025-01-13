import { motion } from 'framer-motion';
import { LinkedinIcon, Mail, Instagram } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Section */}
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
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
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
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text h-12"
              variants={itemVariants}
            >
              Shiwanka Singh
            </motion.h1>
            <motion.h2
              className="text-2xl text-blue-400 font-semibold"
              variants={itemVariants}
            >
              MBA Candidate | Strategic Thinker | Innovator
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              A results-driven MBA student passionate about using strategic management, business analytics, and financial insights to solve real-world problems and drive impactful decisions.
            </motion.p>
            <motion.div
              className="flex space-x-6"
              variants={itemVariants}
            >
              {[
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/shiwanka-singh-278243255/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com/shiwanka",
                  color: "hover:text-purple-400",
                },
                {
                  icon: Mail,
                  href: "mailto:shiwankakumari1999@gmail.com",
                  color: "hover:text-red-400",
                },
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
              className="flex space-x-4 mt-6"
              variants={itemVariants}
            >
              <motion.a
                href="/CV.pdf"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:bg-blue-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-gray-800 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Meeting
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 text-center space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            variants={itemVariants}
          >
            My AchiveMent
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
            variants={containerVariants}
          >

            {[
              { stat: "Fresher", label: "Ready to Explore" },
              { stat: "5", label: "Projects Completed" },
              { stat: "5+", label: "Certifications Earned" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
                variants={itemVariants}
              >
                <h3 className="text-4xl font-bold text-blue-400">{item.stat}</h3>
                <p className="text-gray-300 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-16 text-center space-y-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            variants={itemVariants}
          >
            What People Says
          </motion.h1>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
            variants={containerVariants}
          >

            {[
              "Shiwanka is a natural leader and an excellent strategist.",
              "Her analytical skills are top-notch and drive results.",
              "She is a creative thinker and a joy to work with.",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
                variants={itemVariants}
              >
                <p className="text-gray-300 mt-2">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;
