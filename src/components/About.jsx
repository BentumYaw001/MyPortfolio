import { motion } from "framer-motion";
import { useDownloadStore } from "./Store";
import { AboutMessage } from "./ProjectData";

const About = ({ id }) => {
  const downloadCV = useDownloadStore((state) => state.downloadCV);

  return (
    <motion.div
      className="About"
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Slide-in Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span># </span>About <hr />
      </motion.h2>

      {/* Staggered Text Animation */}
      <motion.div className="Intro">
        {AboutMessage.map((item, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {item.message}
          </motion.p>
        ))}
      </motion.div>

      {/* Download CV Button Animation */}
      <motion.div
        className="CV"
        onClick={downloadCV}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Download CV
      </motion.div>
    </motion.div>
  );
};

export default About;
