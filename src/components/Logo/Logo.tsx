import { FC } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo: FC = () => {
    return (
        <Link to="..">
            <img className={styles.logo} src="/kolio.svg" alt="" />
        </Link>
    );
};

export default Logo;
