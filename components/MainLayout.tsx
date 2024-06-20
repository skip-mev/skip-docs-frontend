import { FC } from "react";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

interface Props {
  children?: React.ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40">
        <NavBar />
      </div>
      <div className="max-w-6xl mx-auto pt-16 pb-16 space-y-64">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
