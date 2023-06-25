import { Outlet } from "react-router-dom";
import HeaderComponent from "./Components/Header";

function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default Layout;
