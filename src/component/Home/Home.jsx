import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function loadingFn() {
      setLoading(false);
    }
    window.addEventListener("load", loadingFn);
    return () => window.removeEventListener("load", loadingFn);
  }, []);


return (
  <>
    <Loader load={loading}/>
    <Nav />
    <Outlet />
    <Footer />
  </>
);}

export default Main;
