'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLoveMessageProps {
  name: string;
}

export default function AnimatedLoveMessage({ name }: AnimatedLoveMessageProps) {
  const [displayText, setDisplayText] = useState('');
  const fullText = `I love you, ${name}!`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center text-pink-600 my-8"
    >
      {displayText}
    </motion.div>
  );
}