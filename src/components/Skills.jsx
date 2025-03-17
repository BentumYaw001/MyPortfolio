import { motion } from "framer-motion";
import DortNine from "/src/assets/design/dots-nine.svg";
import DortSix from "/src/assets/design/dots-six.svg";
import { Skill } from "./ProjectData";

const Skills = ({ id }) => {
  return (
    <motion.div
      className="Skills"
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
        <span id={id}># </span>Skills <hr />
      </motion.h2>

      {/* Background Dots Animation */}
      <motion.div
        className="Dots"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={DortNine} alt="" className="DotPrime" />
        <img src={DortSix} alt="" />
      </motion.div>

      {/* Skills Grid */}
      <div className="SkillDesktop">
        {Skill.map((item, index) => (
          <motion.div
            key={index}
            className="SkillBox"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
