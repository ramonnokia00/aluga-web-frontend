import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import Login from "../pages/login";

const PageLayout = () => {
    return (
        <>
        <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default PageLayout;
