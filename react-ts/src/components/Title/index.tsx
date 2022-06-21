import { createElement, HTMLAttributes } from "react";
import { FiAnchor } from "react-icons/fi";
import { IconType } from "../../types/IconType";
import styles from "./styles.module.css";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  icon?: IconType;
}

function Title({ icon = FiAnchor, children, ...rest }: TitleProps) {
  return (
    <h3 className={styles.title} {...rest}>
      {icon && createElement(icon)}
      {children}
    </h3>
  );
}

export { Title };
