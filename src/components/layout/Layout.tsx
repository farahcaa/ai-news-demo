import { Outlet } from "react-router";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollRestorationBlocker } from "./ScrollRestorationBlocker";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-50">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="grow">
        <ScrollRestorationBlocker />
        <Outlet />
      </div>

      <div className="sticky left-0 bottom-0 w-10 z-50">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
