import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="hidden lg:flex flex-col w-72 min-h-screen bg-light-100 dark:bg-dark-200 p-6 border-r border-light-300 dark:border-dark-300"
    >
      <div className="sticky top-6 flex flex-col h-[calc(100vh-48px)] justify-between">
        {/* Profile + Info */}
        <div className="flex flex-col items-center mt-12 mb-10">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-gold-400/10 shadow-lg">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-xl font-bold text-dark-900 dark:text-light-100 mb-2">
            Kishan Agarwal
          </h2>
          <p className="text-dark-600 dark:text-light-400 text-sm">
            Software Developer
          </p>
        </div>

        {/* Contact Info + Socials */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-dark-600 dark:text-light-400">
              <Mail className="w-5 h-5 text-gold-500" />
              <span className="text-sm">kishan189368@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-dark-600 dark:text-light-400">
              <Phone className="w-5 h-5 text-gold-500" />
              <span className="text-sm">+91 83028 39368</span>
            </div>
            <div className="flex items-center gap-3 text-dark-600 dark:text-light-400">
              <MapPin className="w-5 h-5 text-gold-500" />
              <span className="text-sm">Bengaluru, IN</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/kishan--agarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-800 dark:bg-light-200 hover:bg-gold-500 dark:hover:bg-gold-500 transition-colors duration-300 shadow-md"
            >
              <Linkedin className="w-5 h-5 text-neutral-100 dark:text-dark-800" />
            </a>
            <a
              href="https://github.com/kishanagarwal18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-800 dark:bg-light-200 hover:bg-gold-500 dark:hover:bg-gold-500 transition-colors duration-300 shadow-md"
            >
              <Github className="w-5 h-5 text-neutral-100 dark:text-dark-800" />
            </a>
            <a
              href="https://www.instagram.com/_kishan_ag"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-dark-800 dark:bg-light-200 hover:bg-gold-500 dark:hover:bg-gold-500 transition-colors duration-300 shadow-md"
            >
              <Instagram className="w-5 h-5 text-neutral-100 dark:text-dark-800" />
            </a>
          </div>
        </div>

        {/* Fun/Creative bottom filler */}
        <div className="mt-12 text-center px-4">
          <blockquote className="italic text-dark-700 dark:text-light-300 text-sm">
            "Code is like humor. When you have to explain it, it’s bad." <br /> – Cory House
          </blockquote>
          <div className="mt-6">
            <svg
              className="mx-auto w-24 h-24 text-gold-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
