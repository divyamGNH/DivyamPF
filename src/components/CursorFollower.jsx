import { motion } from 'framer-motion';
import useMouseStore from '../Store/useMouseStore.js';

const CursorFollower = () => {
  const { x, y, hasMoved } = useMouseStore();
  
  return (
    <>
      <motion.div
        className="cursor-circle"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#E74C3C',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: hasMoved ? 1 : 0,
          // mixBlendMode: 'difference',
        }}
        animate={{
          left: x - 20,
          top: y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          mass: 0.5,
          opacity: { duration: 0.2 },
        }}
      />
    </>
  );
};

export default CursorFollower;
