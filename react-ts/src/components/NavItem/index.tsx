import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <Link to={href}>
      <span className={styles.content}>{children}</span>
    </Link>
  );
}

export { NavItem };
