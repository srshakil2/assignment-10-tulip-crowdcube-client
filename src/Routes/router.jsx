import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Campaigns from "../Components/Campaigns";
import Addcampaign from "../Components/Addcampaign";
import PrivateRoute from "./PrivateRoute";

// import UpdateCampaign from "../Components/UpdateCampaign";
// import CampaignDetails from "../Components/CampaignDetails";
// import MyDonations from "../Components/MyDonations";
import Login from "../Components/Auth/Login";
// import Register from "../Components/Auth/Register";

// import MyCampaign from "../Components/MyCampaign";
import ErrorPages from "../Components/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5500/campaign"),
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
        loader: () => fetch("http://localhost:5500/campaign"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <Addcampaign></Addcampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
