import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo: FC = () => {
    return (
        <Link to="..">
            <img className={styles.logo} src="/kolio.svg" alt="" />
        </Link>
    );
};

export default Logo;
