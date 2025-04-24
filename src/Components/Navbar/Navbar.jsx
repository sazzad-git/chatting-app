import { Link, useLocation, useNavigate } from "react-router-dom";
import { FriendsIcon } from "../../svg/Friends";
import { MessageIcon } from "../../svg/Message";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../features/Slices/LoginSlice";
import { CameraIcon } from "../../svg/camera";

const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        localStorage.removeItem("user");
        dispatch(logOutUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex items-center justify-between py-3 bg-slate-900">
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <div className="w-16 ml-2 h-16 rounded-full bg-orange-200 overflow-hidden"></div>

            <div className="absolute bottom-0 right-0 w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <CameraIcon />
            </div>
          </div>
          <div>
            <span className="font-fontRegular text-white">Sazzadur Rahman</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-white bg-[#6CD0fb]"
                : "text-[#292d32] bg-white"
            } w-10 h-10 rounded-full  flex items-center justify-center`}
          >
            <FriendsIcon />
          </Link>
          <Link
            to="/message"
            className={`${
              location.pathname === "/message"
                ? "text-white bg-[#6CD0fb]"
                : "text-[#292d32] bg-white"
            } w-10 h-10 rounded-full  flex items-center justify-center`}
          >
            <MessageIcon />
          </Link>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-[#6CD0FB] px-4 py-2 mx-2 rounded-md font-fontBold text-sm text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
