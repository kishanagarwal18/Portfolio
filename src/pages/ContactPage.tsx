import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
      >
        {/* Map Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-light-100 mb-4">
            Find Me Here
          </h1>
          <p className="text-dark-600 dark:text-light-400 mb-4">
            You can locate me on the map below.
          </p>
          <p className="text-dark-600 dark:text-light-400">
            I'm open to collaboration on exciting projects and ideas — feel free to reach out!
          </p>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-dark-400 dark:border-dark-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.085819004227!2d77.56140371571726!3d13.030206764418166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17df0d1150df%3A0xf726a51b4e49b0aa!2sVisitors%20Comfort!5e0!3m2!1sen!2sin!4v1747499721439!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              className="border-0"
              aria-label="Google Maps location"
            />
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <h2 className="text-3xl font-semibold text-dark-900 dark:text-light-100 mb-6">
            Contact Form
          </h2>

          <div className="bg-light-100 dark:bg-dark-200 p-6 md:p-8 rounded-lg shadow-lg border border-light-300 dark:border-dark-400">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-dark-900 dark:text-light-100">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-light-200 dark:bg-dark-300 text-dark-900 dark:text-light-100 border border-light-300 dark:border-dark-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-dark-900 dark:text-light-100">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-light-200 dark:bg-dark-300 text-dark-900 dark:text-light-100 border border-light-300 dark:border-dark-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-dark-900 dark:text-light-100">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-light-200 dark:bg-dark-300 text-dark-900 dark:text-light-100 border border-light-300 dark:border-dark-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-dark-900 dark:text-light-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-light-200 dark:bg-dark-300 text-dark-900 dark:text-light-100 border border-light-300 dark:border-dark-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-gold-500 text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gold-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

