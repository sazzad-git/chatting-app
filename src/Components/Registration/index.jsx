import { useFormik } from "formik";
import { signUp } from "../../validation/Validation";
import {
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

const RegFormComp = ({ toast }) => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      createNewUsers();
    },
    validationSchema: signUp,
  });

  const createNewUsers = () => {
    setLoading(true);
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(() => {
        // Signed up
        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast.success("Email sent for verification", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            let redirecting = setTimeout(() => {
              navigate("/login");
            }, 2000);
            if (redirecting === true) {
              clearTimeout(redirecting);
            }
            setLoading(false);
          })
          .catch((error) => {
            toast.error(error.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;

        const errorMessage = error.message;
        if (errorMessage.includes("auth/email-already-in-use")) {
          toast.error("Email already in use", {
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
        console.log(errorMessage);
        // ..
      });
  };
  // console.log(formik);
  return (
    <div>
      <h1 className="mb-4 text-xl font-fontBold">
        Registration for your new journey
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="w-full px-3 py-2 mb-3 border rounded-md outline-none border-slate-400"
          placeholder="enter your name"
          type="text"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <p className="font-fontRegular mb-5 text-red-500 text-sm">
            {formik.errors.fullName}
          </p>
        )}
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
          {loading ? <BeatLoader color="#fff" size={5} /> : "Sign Up"}
        </button>
      </form>
      <p className="mt-5 text-base text-gray-400 font-fontRegular">
        Already have an account?{" "}
        <Link className="text-blue-500 hover:underline" to="/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegFormComp;
