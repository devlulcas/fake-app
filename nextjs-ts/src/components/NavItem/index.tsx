import Link from "next/link";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <Link href={href}>
      <span className={styles.content}>{children}</span>
    </Link>
  );
}

export { NavItem };
