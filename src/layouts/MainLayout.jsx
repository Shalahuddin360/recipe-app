import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Headers from "../components/shared/Headers";

const MainLayout = () => {
    return (
        <div>
           <Headers/> 
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;