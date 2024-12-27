import { useFormik } from "formik";
import { signIn } from "../../validation/Validation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginFromComp = ({ toast }) => {
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

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
        setLoading(false);
        if (user?.emailVerified === true) {
          console.log("true");
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
        }
        console.log(user?.emailVerified);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
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
          don&apos;t have an account? Sign up
        </p>
      </div>
    </>
  );
};

export default LoginFromComp;
