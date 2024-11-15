import { motion, useAnimationControls } from "framer-motion";

import { FC } from "react";
import StretchedUnderline from "../StretchedUnderline";
import styles from "./fliplink.module.css";
import { Link } from "react-router-dom";

interface FlipLinkProps {
    link_name: string;
    to: string;
    underline: boolean;
}

const DURATION = 0.25;
const STAGGER = 0.04;
const BEZIER = [0.78, 0, 0.52, 0.51];

const FlipLink: FC<FlipLinkProps> = ({ link_name, to }, underline) => {
    const underlineControls = useAnimationControls();

    const handleHover = () => {
        underlineControls.start("stretch");
    };
    const handleUnHover = () => {
        underlineControls.start("initial");
    };

    return (
        <div className={styles.wrapper}>
            <Link to={to} className={styles.navLink}>
                <motion.div
                    style={{ display: "inline-block" }}
                    initial="initial"
                    whileHover="hovered"
                    onMouseEnter={underline && handleHover}
                    onMouseLeave={underline && handleUnHover}
                >
                    <div className={styles.linkOriginal}>
                        {link_name.split("").map((l, i) => {
                            return (
                                <motion.span
                                    variants={{
                                        initial: {
                                            y: 0,
                                        },
                                        hovered: {
                                            y: "-200%",
                                        },
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: BEZIER,
                                        delay: STAGGER * i,
                                    }}
                                    className={styles.inlineBlock}
                                    key={i}
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
                                    variants={{
                                        initial: {
                                            y: "200%",
                                        },
                                        hovered: {
                                            y: 0,
                                        },
                                    }}
                                    transition={{
                                        duration: DURATION,
                                        ease: BEZIER,
                                        delay: STAGGER * i,
                                    }}
                                    className={styles.inlineBlock}
                                    key={i}
                                >
                                    {l}
                                </motion.span>
                            );
                        })}
                    </div>
                </motion.div>
            </Link>
            {underline && (
                <StretchedUnderline
                    DURATION={DURATION}
                    BEZIER={BEZIER}
                    animateControls={underlineControls}
                />
            )}
        </div>
    );
};

export default FlipLink;
