// CursorFollower.jsx
import { motion } from 'framer-motion';
import useMouseStore from '../Store/useMouseStore.js';

const CursorFollower = () => {
  const x = useMouseStore(state => state.x);
  const y = useMouseStore(state => state.y);
  
  return (
    <>
      {/* Option 1: Simple circle */}
      <motion.div
        className="cursor-circle"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#E74C3C',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          z: 10,
        }}
        animate={{
          left: x - 20,  // Center the 40px circle
          top: y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
    </>
  );
};

export default CursorFollower;