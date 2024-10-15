'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogAnswer() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate an API call or processing logic
    setTimeout(() => {
      setAnswer(`Thank you for your message: "${message}". I'll get back to you soon!`);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-purple-800">Leave a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          className="w-full h-32 p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-6 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Send Message
        </motion.button>
      </form>
      {answer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 bg-purple-100 rounded-md border border-purple-200"
        >
          <p className="text-purple-800">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}