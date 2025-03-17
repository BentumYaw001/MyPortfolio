import { motion } from "framer-motion";
import { Contacts } from "./ProjectData";

function Footer() {
  return (
    <>
      <motion.div
        className="Footer"
        initial={{ x: "100vw", opacity: 0 }} // Start off-screen (right)
        animate={{ x: 0, opacity: 1 }} // Slide to the original position
        transition={{ type: "tween", duration: 1 }} // Smooth animation
      >
        <hr />
      </motion.div>

      <motion.div
        className="FooterIcons"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1, delay: 0.2 }}
      >
        {Contacts.map((item, index) => (
          <motion.div
            className="CopyRight"
            key={index}
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.3 + index * 0.1,
            }}
          >
            <a href={item.address} target="_blank">
              <img src={item.icon} alt={item.name} />
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="CopyRight"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1, delay: 0.5 }}
      >
        Email: richmondbentum2020@gmail.com
      </motion.p>

      <motion.h2
        className="CopyRight"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1, delay: 0.6 }}
      >
        Software Engineer
      </motion.h2>

      <motion.p
        className="CopyRight Made"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1, delay: 0.7 }}
      >
        &copy; Copyright 2025, Made by Bentum
      </motion.p>
    </>
  );
}

export default Footer;
