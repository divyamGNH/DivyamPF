<motion.div
  className="mask"
  style={{
    backgroundColor: hover ? "#E74C3C" : "transparent",
  }}
  animate={{
    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    MaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    WebkitMaskSize: hover ? "400px" : "40px",   // ⬅ animate between values
  }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.7,
  }}
>
  {children}
</motion.div>
