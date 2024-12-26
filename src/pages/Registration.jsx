import RegFormComp from "../Components/Registration";
import Lottie from "lottie-react";
import regAnimation from "../animations/regAnimation.json";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex items-center justify-between w-2/4 p-4 bg-white rounded-sm shadow-md gap-x-2">
          <div className="w-[48%]">
            <Lottie animationData={regAnimation} loop={true} />
          </div>
          <div className="w-[48%]">
            <RegFormComp toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
