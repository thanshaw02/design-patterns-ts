import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import LandingPage from "../components/LandingPage";
import SignInPage from "../components/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/home",
    element: <HomePage />
  }
]);

export default router;