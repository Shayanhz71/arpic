
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setTimeout(() => {
        onFinished();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#78156F] flex flex-col items-center justify-center z-50"
      animate={{ opacity: animationComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-7xl font-bold text-white mb-4"
        >
          آرپیک
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl text-white text-center mb-8"
        >
          استودیو حرفه‌ای ویرایش عکس
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="w-16 h-16 border-t-4 border-white rounded-full animate-spin"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
