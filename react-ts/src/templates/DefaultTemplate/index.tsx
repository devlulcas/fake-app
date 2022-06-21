import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

function DefaultTemplate() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export { DefaultTemplate };
