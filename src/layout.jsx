import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/navigations/NavbarComponent";
import FooterComponent from "./components/navigations/FooterComponent";

export default function MainLayout() {
  return (
    <div>
        <NavbarComponent/>
        <Outlet/>
        <FooterComponent/>
    </div>
  )
}
