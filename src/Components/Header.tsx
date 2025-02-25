import { motion } from "framer-motion";
import logo from "../assets/react.svg";

function Header() {
  return (
    <header className="app-header">
      <motion.img
        initial={{
          x: -1000,
          rotate: 0,
        }}
        animate={{
          x: 0,
          rotate: 360,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
          duration: 0.75
        }}
        src={logo}
        alt="React logo"
      />
      <motion.h1
        initial={{
          x: 1000,
        }}
        animate={{
          x: 0
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
          duration: 0.75
        }}
      >
        The React Quiz
      </motion.h1>
    </header>
  );
}

export default Header;
