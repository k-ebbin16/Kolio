import { FC } from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import styles from "./NavBar.module.css";

const NavBar: FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavLinks />
    </div>
  );
};

export default NavBar;
