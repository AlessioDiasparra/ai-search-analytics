'use client';

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const SearchPrompt = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
      className='mt-6 flex justify-center'
    >
      <div className='group relative w-full max-w-3xl'>
        <div className='relative flex items-center justify-between gap-4 px-8 py-5 bg-white dark:bg-card rounded-full border border-border shadow-lg hover:shadow-xl transition-shadow'>
          <span className='flex-1 text-3xl text-foreground'>
            How do you get discovered in{' '}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              AI search?
            </span>
          </span>
          <div className='flex items-center justify-center w-4 h-4 rounded-full'>
            <Search className='h-6 w-6 text-foreground/60' />
          </div>
        </div>
      </div>
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap'
        rel='stylesheet'
      />
    </motion.div>
  );
};
