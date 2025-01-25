import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Campaigns from "../Components/Campaigns";
import Addcampaign from "../Components/Addcampaign";
import UpdateCampaign from "../Components/UpdateCampaign";
import CampaignDetails from "../Components/CampaignDetails";
import MyDonations from "../Components/MyDonations";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import MyCampaign from "../Components/MyCampaign";
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
        loader: () => fetch("https://tulip-server.vercel.app/campaign"),
      },
    ],
  },
]);

export default router;
