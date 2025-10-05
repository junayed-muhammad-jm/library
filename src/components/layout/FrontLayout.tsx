import Footer from "@/components/module/Footer";
import Navbar from "@/components/module/navbar";
import { Outlet } from "react-router";

function FrontLayout() {
    return (<div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
            <Outlet />

        </div>
        <Footer />

    </div>);
}

export default FrontLayout;