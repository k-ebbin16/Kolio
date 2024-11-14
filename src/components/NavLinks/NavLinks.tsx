import { FC } from "react";
import FlipLink from "../FlipLink";
import styles from "./navlinks.module.css";
import useNavLinks from "../../hooks/useNavLinks";

const NavLinks: FC = () => {
    const navigation = useNavLinks();
    
    return (
        <nav className={styles.nav}>
            {navigation.map(({ link_name, to }, i) => {
                return <FlipLink link_name={link_name} to={to} key={i} />;
            })}
        </nav>
    );
};

export default NavLinks;
