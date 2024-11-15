import { AnimationControls, motion } from "framer-motion";

import { FC } from "react";
import styles from "./stretchedunderline.module.css";

interface StretchedUnderlineProps {
    animateControls: AnimationControls;
    DURATION: number;
    BEZIER: number[];
}

const StretchedUnderline: FC<StretchedUnderlineProps> = ({
    animateControls,
    DURATION,
    BEZIER,
}) => {
    return (
        <motion.div
            className={styles.bottomLine}
            variants={{
                initial: {
                    scaleX: 0,
                },
                stretch: {
                    scaleX: 1,
                },
            }}
            initial="initial"
            animate={animateControls}
            transition={{
                duration: DURATION,
                ease: BEZIER,
            }}
        ></motion.div>
    );
};

export default StretchedUnderline;
