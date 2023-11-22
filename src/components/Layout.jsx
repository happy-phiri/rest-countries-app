import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet context={{ darkMode, setDarkMode }} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Layout;
