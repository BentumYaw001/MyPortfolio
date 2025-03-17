import { motion } from "framer-motion";
import Data from "./ProjectData";

const Projects = ({ id }) => {
  return (
    <motion.div
      className="Projects"
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
        <span># </span>Projects <hr />
      </motion.h2>

      <div className="ProjectDesktop">
        {Data.map((item, index) => (
          <motion.div
            key={index}
            className="ProjectPreview"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt="" className="ProjectImage" />
            <p className="ProjectFrameworks">{item.frameWorks}</p>
            <div className="ProjectName">{item.name}</div>
            <div className="ProjectDescription">{item.description}</div>

            <a href={item.liveSite} target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
