'use client';
import { motion } from 'framer-motion'
import React from 'react'

export default function Visitor() {
  return (
        <motion.div className='flex bg-gray-100 px-8 py-4 space-x-2 border border-black-5 shadow-md rounded-full mb-8 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200'
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          duration: 0.7,
          delay: 0.1,
        }}
        >
            <h1 className='text-2xl font-medium'>Visitor Count: </h1>
            <p className='text-2xl font-bold'>100</p>
        </motion.div>
  )
}
