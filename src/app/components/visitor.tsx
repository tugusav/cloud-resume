'use client';
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { getPageViews, updatePageViews } from '../helpers/page_views';

export default function Visitor() {
  const [pageViews, setPageViews] = React.useState<number>(0);

  useEffect(() => {
    updatePageViews();
    // Fetch and display current page views
    const fetchPageViews = async () => {
      const views = await getPageViews();
      setPageViews(views);
    };
    fetchPageViews();
  }, [])


  return (
        <motion.div className='flex bg-white px-8 py-4 space-x-2 shadow-md rounded-full mb-8 dark:bg-gray-800 dark:border-gray-700 dark:text-white/60 transition'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          duration: 0.01,
          delay: 0.05,
        }}
        >
            <h1 className='text-2xl font-medium'>Visitor Count: </h1>
            <p className='text-2xl font-bold'>{pageViews}</p>
        </motion.div>
  )
}
