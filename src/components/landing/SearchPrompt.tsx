'use client';

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const SearchPrompt = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'How do you get discovered in AI search?';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
      className='mt-6 flex justify-center'
    >
      <div className='group relative w-full max-w-2xl'>
        <div className='relative flex items-center gap-3 px-4 py-3 bg-white dark:bg-card rounded-full border border-border shadow-lg hover:shadow-xl transition-shadow'>
          <div className='flex items-center justify-center'>
            <Search className='h-5 w-5 text-foreground/60' />
          </div>
          <span className='flex-1 text-xl text-foreground'>
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap'
        rel='stylesheet'
      />
    </motion.div>
  );
};
