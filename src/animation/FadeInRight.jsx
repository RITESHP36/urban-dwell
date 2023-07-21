import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FadeInRight = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25, // Adjust this threshold as needed (0 to 1)
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={animationVariants}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRight;
