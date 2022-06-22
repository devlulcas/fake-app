import { HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />;
}

export { Button };
