import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >

        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-gold-500" />
            <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-6 border-l-2 border-gold-500"
            >
              <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  M S Ramaiah Institute of Technology, Bangaluru
                </h3>
                <p className="text-gold-500">  2022 - present</p>
                <p className="text-dark-600 dark:text-light-400">
                  Bachelor of Engineering in Computer Science. Specialization in Cybersecurity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-gold-500"
            >
              <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  Ruby Children Senior Secondary School, Kota
                </h3>
                <p className="text-gold-500"> 2019 - 2021</p>
                <p className="text-dark-600 dark:text-light-400">
                  Central Board of Secondary Education
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-gold-500"
            >
              <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  The Scholar English Medium High School, Siliguri
                </h3>
                <p className="text-gold-500"> 2009 - 2019</p>
                <p className="text-dark-600 dark:text-light-400">
                  Indian Certificate of Secondary Education
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-gold-500" />
            <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-gold-500"
            >
              <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  Student Trainee
                </h3>
                <p className="text-gold-500">May 2025 - present</p>
                <p className="text-dark-600 dark:text-light-400">
                  Interned at Tata Steel Limited, gaining hands-on experience in steel manufacturing processes. Participated in technical sessions and contributed to industrial workflow optimization initiatives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-6 border-l-2 border-gold-500"
            >
              <div className="absolute w-4 h-4 bg-gold-500 rounded-full -left-[9px] top-0"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-dark-900 dark:text-light-100">
                  SDE Intern
                </h3>
                <p className="text-gold-500">Mar 2025 - May 2025</p>
                <p className="text-dark-600 dark:text-light-400">
                  Worked at JPMorgan Chase & Co. where I built Python scripts to analyze large-scale loan datasets and predict customer default risks using statistical modeling and data structures. Designed a credit risk classification pipeline by converting FICO scores into categorical data using dynamic programming, improving model interpretability and performance.
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-gold-500" />
            <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-light-100 dark:bg-dark-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100 mb-2">
                AWS Academy Cloud Foundations
              </h3>
              <p className="text-gold-500 text-sm mb-2">Amazon Web Services • 2025</p>
              <p className="text-dark-600 dark:text-light-400 text-sm">
                Completed 20-hour foundational course covering core AWS services and cloud concepts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 bg-light-100 dark:bg-dark-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100 mb-2">
                Google Cloud Career Launchpad
              </h3>
              <p className="text-gold-500 text-sm mb-2">Google • 2025</p>
              <p className="text-dark-600 dark:text-light-400 text-sm">
                Completed the Cybersecurity track with hands-on labs and learning modules on GCP security practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-light-100 dark:bg-dark-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100 mb-2">
                Machine Learning Fundamentals
              </h3>
              <p className="text-gold-500 text-sm mb-2">Infosys Springboard • 2025</p>
              <p className="text-dark-600 dark:text-light-400 text-sm">
                Introduced core ML concepts including supervised and unsupervised learning with practical exercises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 bg-light-100 dark:bg-dark-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-dark-900 dark:text-light-100 mb-2">
                Software Engineering
              </h3>
              <p className="text-gold-500 text-sm mb-2">NPTEL (IIT Kharagpur) • 2024</p>
              <p className="text-dark-600 dark:text-light-400 text-sm">
                Completed 12-week course covering SDLC, Agile, testing, and design principles.
              </p>
            </motion.div>
          </div>
        </section>


        {/* Core Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gold-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m0 0v2a2 2 0 002 2h14a2 2 0 002-2v-2m-6-6v6"
              />
            </svg>
            <h2 className="text-3xl font-bold text-dark-900 dark:text-light-100">
              Core Skills
            </h2>
          </div>

          <div className="space-y-4 w-full">
            {[
              { name: 'React.js', level: 90 },
              { name: 'Node.js', level: 85 },
              { name: 'Express.js', level: 80 },
              { name: 'TensorFlow & Sci-kit Learn', level: 75 },
              { name: 'Docker & Git', level: 80 },
            ].map((skill, index) => (
              <div key={index} className="space-y-1 w-full">
                <div className="flex justify-between text-sm">
                  <span className="text-dark-600 dark:text-light-400">{skill.name}</span>
                  <span className="text-gold-500">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-light-300 dark:bg-dark-300 rounded">
                  <div
                    className="h-full bg-gold-500 rounded"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>


      </motion.div>
    </div>
  );
};

export default ResumePage;