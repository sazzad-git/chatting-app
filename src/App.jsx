import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoggedInUserRoute from "./PrivateRoute/LoggedInUserRoute";
import NotLoggedInUser from "./PrivateRoute/NotLoggedInUser";
import Messages from "./pages/Messages";
import RootLayout from "./Components/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUserRoute />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<Messages />} />
          </Route>
        </Route>

        <Route element={<NotLoggedInUser />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
