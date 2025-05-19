import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, Laptop } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      icon: <Palette className="w-6 h-6" />,
    },
    {
      category: "Other Tools",
      items: ["Git", "Docker", "AWS", "Firebase"],
      icon: <Laptop className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* About Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-dark-600 dark:text-light-400">
              I'm a Full Stack Developer with a passion for creating beautiful,
              functional, and user-friendly web applications. With 5 years of
              experience in the industry, I've worked on various projects ranging
              from small business websites to large-scale enterprise applications.
            </p>
            <p className="text-dark-600 dark:text-light-400">
              My journey in web development started during my college years, and
              since then, I've been constantly learning and adapting to new
              technologies and best practices in the field.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100">
            My Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Social Media Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-light-100 dark:bg-dark-200 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  Social Media Strategy
                </h3>
              </div>
              <p className="text-dark-600 dark:text-light-400">
                Developing data-driven social campaigns that increase engagement and brand awareness across platforms
              </p>
            </motion.div>

            {/* Content Creation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-light-100 dark:bg-dark-200 rounded-lg border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-3.5-3.5L12 18l-3.5-4L3 21" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  Visual Content Creation
                </h3>
              </div>
              <p className="text-dark-600 dark:text-light-400">
                Crafting compelling graphics and multimedia content that resonates with target audiences
              </p>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-light-100 dark:bg-dark-200 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  UI/UX Design
                </h3>
              </div>
              <p className="text-dark-600 dark:text-light-400">
                Creating intuitive user interfaces with thoughtful user experience principles
              </p>
            </motion.div>

            {/* Digital Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-light-100 dark:bg-dark-200 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  Digital Innovation
                </h3>
              </div>
              <p className="text-dark-600 dark:text-light-400">
                Exploring emerging technologies to create forward-thinking digital experiences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mb-4 text-center">
            Tools
          </h3>

          {/* Scroll container with limited width for shorter scrollbar track */}
          <div
            className="tools-scrollbar overflow-x-auto mx-auto"
            style={{ maxWidth: '480px' }}
          >
            <div className="flex items-center gap-8 px-4 py-6 w-max">
              {/* Larger icons */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                alt="PyTorch"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                alt="NumPy"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                alt="Figma"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                alt="TensorFlow"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
                className="w-20 h-20"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-20 h-20"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;