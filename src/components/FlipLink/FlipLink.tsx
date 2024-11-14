import { MotionConfig, motion, useAnimationControls } from "framer-motion";

import { FC } from "react";
import { NavLink } from "react-router-dom";
import StretchedUnderline from "../StretchedUnderline";
import styles from "./fliplink.module.css";

interface FlipLinkProps {
    link_name: string;
    to: string;
}

const MotionNavLink = motion(NavLink, { forwardMotionProps: true });

const DURATION = 0.008;
const STAGGER = 0.01;

const FlipLink: FC<FlipLinkProps> = ({ link_name, to }) => {
    const controls = useAnimationControls();

    const handleHover = () => {
        controls.start("stretch");
    };
    const handleUnHover = () => {
        controls.set("initial");
    };

    return (
        <div className={styles.wrapper}>
            <MotionConfig
                transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                }}
            >
                <MotionNavLink
                    className={styles.navLink}
                    to={to}
                    initial="initial"
                    whileHover="hovered"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnHover}
                >
                    <div>
                        {link_name.split("").map((l, i) => {
                            return (
                                <motion.span
                                    className={styles.linkOriginalChild}
                                    key={i}
                                    variants={{
                                        initial: { y: 0 },
                                        hovered: { y: "-100%" },
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * i,
                                    }}
                                >
                                    {l}
                                </motion.span>
                            );
                        })}
                    </div>
                    <div className={styles.linkCopy}>
                        {link_name.split("").map((l, i) => {
                            return (
                                <motion.span
                                    className={styles.linkCopyChild}
                                    key={i}
                                    variants={{
                                        initial: { y: "100%" },
                                        hovered: { y: 0 },
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: "easeInOut",
                                        delay: STAGGER * i,
                                    }}
                                >
                                    {l}
                                </motion.span>
                            );
                        })}
                    </div>
                </MotionNavLink>

                <StretchedUnderline animateControls={controls} />
            </MotionConfig>
        </div>
    );
};

export default FlipLink;
