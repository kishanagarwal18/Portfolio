import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen py-8 px-4 flex flex-col items-center gap-12">
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-dark-900 dark:bg-light-100 text-light-100 dark:text-dark-900 px-6 py-4 rounded-2xl shadow-md"
      >
        <h1 className="text-2xl font-semibold">Welcome to My Portfolio</h1>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About Me Section (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-4"
        >
          <h2 className="text-2xl font-bold text-dark-900 dark:text-light-100">
            About Me
          </h2>
          <p className="text-dark-600 dark:text-light-400 text-base leading-relaxed">
            I’m Kishan Agarwal, a Full Stack Developer experienced in building
            performant, scalable applications. I love combining frontend elegance
            with backend logic.
          </p>
        </motion.div>

        {/* Cards (Right 2 Columns) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <div className="bg-light-100 dark:bg-dark-200 p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gold-500 mb-2">Frontend</h4>
            <p className="text-dark-600 dark:text-light-400">
              React.js, Tailwind CSS, Framer Motion
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-light-100 dark:bg-dark-200 p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gold-500 mb-2">Backend</h4>
            <p className="text-dark-600 dark:text-light-400">
              Node.js, Express, JWT Auth
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-light-100 dark:bg-dark-200 p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gold-500 mb-2">Database</h4>
            <p className="text-dark-600 dark:text-light-400">
              MongoDB, MySQL, Firebase
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-light-100 dark:bg-dark-200 p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gold-500 mb-2">DevOps</h4>
            <p className="text-dark-600 dark:text-light-400">
              Docker, Git, Vercel, GCP
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 w-full max-w-4xl text-center"
      >
        <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100 mb-4">
          Tools
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-10 h-10" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="AI/ML" className="w-10 h-10" />
        </div>
      </motion.div>

    </div>
  );
};

export default HomePage;

