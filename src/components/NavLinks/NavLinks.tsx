import { FC } from "react";
import styles from "./navlinks.module.css";
import FlipLink from "../FlipLink";

const NavLinks: FC = () => {
    const navigation = [
        { link_name: "About-Me", to: "about" },
        { link_name: "Projects", to: "projects" },
        { link_name: "Let's-Talk", to: "letstalk" },
    ];

    return (
        <nav className={styles.nav}>
            {navigation.map(({ link_name, to }, i) => {
                return <FlipLink link_name={link_name} to={to} key={i} />;
            })}
        </nav>
    );
};

export default NavLinks;
