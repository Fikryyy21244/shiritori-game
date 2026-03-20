import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/Landing";
import HowToPlayPage from "../pages/HowToPlay";
import KotobaList from "../pages/KotobaList";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },

      {
        path: "list-kotoba",
        element: <KotobaList />,
      },

      {
        path: "/cara-bermain",
        element: <HowToPlayPage />,
      },
    ],
  },
]);

export default router;
