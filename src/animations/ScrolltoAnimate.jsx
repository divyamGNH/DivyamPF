import { motion } from "framer-motion";

export default function ScrolltoAnimate({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ amount: 0.3, once: false }}
    >
      {children}
    </motion.div>
  );
}
