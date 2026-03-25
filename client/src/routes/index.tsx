import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/Landing/page";
import HowToPlayPage from "../pages/HowToPlay/page";
import KotobaList from "../pages/KotobaList/page";
import SinglePlayerPage from "../pages/play/single-player/page";
import MultiplayerPage from "../pages/play/multiplayer/page";
import SoloGameSession from "../pages/play/single-player/game";
import SoloGameResult from "../pages/play/single-player/result";

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

      {
        path: "/play/single",
        element: <SinglePlayerPage />,
      },

      {
        path: "/play/multiplayer",
        element: <MultiplayerPage />,
      },

      {
        path: "/play/single/game",
        element: <SoloGameSession />,
      },
      {
        path: "/play/single/game/result",
        element: <SoloGameResult />,
      },
    ],
  },
]);

export default router;
