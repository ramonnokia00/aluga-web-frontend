import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Abas from "../pages/Abas";

const PageLayout = () => {
    return ( <>
<Header/>
<Outlet/>
<Abas/>
<Footer/>
        
    </> );
}
 
export default PageLayout;