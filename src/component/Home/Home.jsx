import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Main = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Main;
