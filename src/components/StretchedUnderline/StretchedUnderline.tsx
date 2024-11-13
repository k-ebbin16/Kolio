import { AnimationControls, motion } from "framer-motion";
import { FC } from "react";
import styles from "./stretchedunderline.module.css";

interface StretchedUnderlineProps {animateControls: AnimationControls;}

const StretchedUnderline: FC<StretchedUnderlineProps> = ({ animateControls }) => {
  return <motion.div
    className={ styles.bottomLine }
    variants={ {
      initial: {
        scaleX: 0,
      },
      stretch: {
        scaleX: 1,
      },
    } }
    initial="initial"
    animate={ animateControls }
  ></motion.div>;
};

export default StretchedUnderline;
