import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 95 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.75}}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
