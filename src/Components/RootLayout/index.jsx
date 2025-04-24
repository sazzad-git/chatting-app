import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="h-[300px] bg-[#212121] w-full"></div>
        <div className="w-3/4 pb-5 bg-white shadow-md rounded-md absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
