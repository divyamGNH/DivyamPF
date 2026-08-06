import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0E0E0E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#E74C3C",
          marginBottom: "20px",
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          color: "#C7B99B",
          fontFamily: "'Questrial', sans-serif",
          letterSpacing: "4px",
          fontSize: "14px",
        }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
};

export default Loader;
