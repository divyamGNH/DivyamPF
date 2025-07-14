'use client';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { MouseContext } from '../Context/MouseContext';
// import './CursorFollower.css'; // Make sure this CSS file exists

const CursorFollower = () => {
  const { x, y, size } = useContext(MouseContext);

  return (
    <motion.div
      className="cursor-follower"
      animate={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30
      }}
    />
  );
};

export default CursorFollower;
