import { ReactNode } from "react";
import styles from "./styles/button.module.scss";

const Button = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "submit" | "reset" | "button";
}) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
