'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLoveMessage from '@/components/AnimatedLoveMessage';

export default function LoveMessageForm() {
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
            className="flex-grow px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 sm:mt-0 w-full sm:w-auto px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Generate Love
          </motion.button>
        </div>
      </form>
      {showMessage && <AnimatedLoveMessage name={name} />}
    </div>
  );
}