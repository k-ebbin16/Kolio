import { FC } from "react";
import Logo from "../Logo";
import styles from "./NavBar.module.css";
import NavLinks from "../NavLinks";

const NavBar: FC = () => {
    return (
        <div className={styles.navbar}>
            <Logo />
            <NavLinks />
        </div>
    );
};

export default NavBar;
