import { motion } from "framer-motion";
import Image1 from "/src/assets/design/Image-1.png";
import DortNine from "/src/assets/design/dots-nine.svg";

function MainBody({ id }) {
  return (
    <div className="MainBody" id={id}>
      <div className="SelfIntro">
        <div className="WhatIDo">
          {/* Slide-in Heading */}
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            I am a <span>software engineer</span>
          </motion.h3>

          {/* Fade-in Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I craft responsive websites using the latest technology on the
            market. I love to stay up to date with technological trends.
          </motion.p>

          {/* Pop-in Contact Button */}
          <motion.a
            href="https://t.me/OohYeesRi"
            target="_blank"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Contact ME
          </motion.a>
        </div>

        {/* Slide-in Current Work Section */}
        <motion.div
          className="CurrentWork"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="CurrentStatus">
            <div className="PurpleBox"></div>
            <div className="Status">
              <p>Currently Available for hire</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fade-in Quote Section */}
      <motion.div
        className="BlockQoute"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="qoute">The hardest choices require the strongest wills</p>
        <p className="Author">- Thanos</p>
      </motion.div>
    </div>
  );
}

export default MainBody;
