import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col items-center justify-center text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-8xl md:text-9xl font-bold text-gold-500"
        variants={itemVariants}
      >
        404
      </motion.h1>
      
      <motion.h2
        className="text-2xl md:text-3xl font-bold mb-4 text-dark-900 dark:text-light-900"
        variants={itemVariants}
      >
        Page Not Found
      </motion.h2>
      
      <motion.p
        className="text-lg text-dark-500 dark:text-light-400 max-w-md mb-8"
        variants={itemVariants}
      >
        Oops! The page you are looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <Link 
          to="/" 
          className="px-6 py-3 bg-gold-500 text-dark-900 font-medium rounded-full hover:bg-gold-400 transition-colors duration-300 flex items-center"
        >
          <Home size={16} className="mr-2" />
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;