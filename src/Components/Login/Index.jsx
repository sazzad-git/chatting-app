import { useFormik } from "formik";
import { signIn } from "../../validation/Validation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../features/Slices/LoginSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginFromComp = ({ toast }) => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      signInUser();
    },
    validationSchema: signIn,
  });

  const signInUser = () => {
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({ user }) => {
        if (user?.emailVerified === true) {
          setLoading(false);
          dispatch(loggedInUser(user));
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        } else {
          toast.error("Please verify your email", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("auth/invalid-credential")) {
          toast.error("Email or password is incorrect", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
      });
  };

  return (
    <>
      <div>
        <h1 className="mb-4 text-xl font-fontBold">Login to your account</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="w-full px-3 py-2 mb-3 border rounded-md outline-none border-slate-400"
            placeholder="enter your email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="font-fontRegular mb-5 text-red-500 text-sm">
              {formik.errors.email}
            </p>
          )}
          <input
            className="w-full px-3 py-2 mb-3 border rounded-md outline-none border-slate-400"
            placeholder="enter your password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="font-fontRegular mb-5 text-red-500 text-sm">
              {formik.errors.password}
            </p>
          )}
          <button
            disabled={loading}
            className="w-full py-3 text-base text-white rounded-md bg-slate-900 font-fontBold"
          >
            {loading ? <BeatLoader color="#fff" size={5} /> : "Sign In"}
          </button>
        </form>
        <p className="mt-5 text-base text-gray-400 font-fontRegular">
          don&apos;t have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/registration">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginFromComp;
