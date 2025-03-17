import { motion } from "framer-motion";
import { Contacts } from "./ProjectData";

const Contact = ({ id }) => {
  return (
    <motion.div
      className="Contacts"
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
        <span># </span>Contacts <hr />
      </motion.h2>

      {/* Fade-in "Get In Touch!" */}
      <motion.div
        className="GetInTouch"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Get In Touch!
      </motion.div>

      {/* Contact List with Staggered Items */}
      <motion.div
        className="AllContacts"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true }}
      >
        {Contacts.map((item, index) => (
          <motion.div
            className="PersonalLines"
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img src={item.icon} alt={item.name} />
            <motion.a
              href={item.address}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
