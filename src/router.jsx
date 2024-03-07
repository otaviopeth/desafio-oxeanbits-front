
import { Navigate, createBrowserRouter } from "react-router-dom"
import Login from "./views/login/Login"
import Register from "./views/register/Register";
import AuthLayout from "./views/layout/AuthLayout";
import GuestLayout from "./views/layout/GuestLayout";
import MovieRegister from "./views/movies/MovieRegister";
import Movies from "./views/movies/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
      {
        path: "/movie/add",
        element: <MovieRegister/>
      },
      {
        path: "/movies",
        element: <Movies/>
      }

    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
    ],
  }

]);

export default router;

