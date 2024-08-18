import { Link } from "react-router-dom";
import styles from "./styles/link.module.scss";

const LinkElem = ({ path, children }: { path: string; children: string }) => {
  return (
    <Link className={styles.link} to={path}>
      {children}
    </Link>
  );
};

export default LinkElem;
