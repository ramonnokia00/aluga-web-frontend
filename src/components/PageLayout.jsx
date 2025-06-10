import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./footer";

const PageLayout = () => {
    return ( <>
<Header/>
<Outlet/>
<Footer/>
    
    </> );
}
 
export default PageLayout;