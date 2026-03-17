import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/Landing";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
