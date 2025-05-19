import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern e-commerce dashboard with real-time analytics and inventory management.",
    category: "Web Development",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A full-featured social media application with real-time messaging and notifications.",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"]
  },
  {
    id: 3,
    title: "Task Management Tool",
    description: "A collaborative task management tool with drag-and-drop interface and team features.",
    category: "Web Development",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    tags: ["React", "Redux", "Node.js", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard with interactive maps and detailed forecasts.",
    category: "UI/UX",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    tags: ["React", "Weather API", "Charts.js", "Tailwind CSS"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A modern portfolio website with dark mode and animations.",
    category: "UI/UX",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    tags: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with progress visualization.",
    category: "Full Stack",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com",
    tags: ["React Native", "Node.js", "MongoDB"]
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'UI/UX', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100">
          My Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === category
                  ? 'bg-gold-500 text-dark-900'
                  : 'bg-light-100 dark:bg-dark-200 text-dark-600 dark:text-light-400 hover:bg-gold-500 hover:text-dark-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-light-100 dark:bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  {project.title}
                </h3>
                
                <p className="text-dark-600 dark:text-light-400 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-gold-500/10 text-gold-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-light-400 hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-600 dark:text-light-400 hover:text-gold-500 dark:hover:text-gold-500 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;