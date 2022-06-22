import { ReactNode } from "react";
import { NavBar } from "../../components/NavBar";

interface DefaultTemplateProps {
  children: ReactNode;
}

function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export { DefaultTemplate };
