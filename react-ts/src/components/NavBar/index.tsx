import styles from "./styles.module.css";
import { NavItem } from "../NavItem";

function NavBar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.navigation}>
        <li>
          <NavItem href="/">Início</NavItem>
        </li>

        <li>
          <NavItem href="/cats">Início</NavItem>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
