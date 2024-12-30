import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
    >
      {greeting}
    </motion.div>
  );
};