/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUsPage from "../page/AboutUs/AboutUsPage";
import ForgetPassword from "../page/Auth/ForgetPassword/ForgetPassword";
import NewPassword from "../page/Auth/NewPassword/NewPassword";
import Otp from "../page/Auth/Otp/Otp";
import SignIn from "../page/Auth/SignIn/SignIn";
import DashboardHome from "../page/DashboardHome/DashboardHome";
import PersonalInformationPage from "../page/PersonalInformation/PersonalInformationPage";
import PrivacyPolicyPage from "../page/PrivacyPolicy/PrivacyPolicyPage";
import SettingsPage from "../page/Settings/SettingsPage";
import TermsconditionPage from "../page/TermsCondition/TermsconditionPage";
import UsersPage from "../page/Users/UsersPage";
// import AddItemPage from "../page/AddItem/AddItemPage";
import Notification from "../component/Main/Notification/Notification";
import EditPersonalInformationPage from "../page/EditPersonalInformationPage/EditPersonalInformationPage";
// import AdminRoutes from "./AdminRoutes";
import ContributionDetails from "../page/ContributionDetails/ContributionDetails";
import EarningsPage from "../page/EarningsPage/EarningsPage";
import EditAboutUs from "../page/EditAboutUs/EditAboutUs";
import EditPrivacyPolicy from "../page/EditPrivacyPolicy/EditPrivacyPolicy";
import EditTermsConditions from "../page/EditTermsConditions/EditTermsConditions";

import ChangeRequestPage from "../page/ChangeRequestPage/ChangeRequestPage";
import SubscriptionPage from "../page/SubscriptionPage/SubscriptionPage";

import ChangeRequestDetailsPage from "../page/ChangeRequestDetailspage/ChangeRequestDetailsPage";
import DriverPage from "../page/Driver/DriverPage";
import DriverBlockListPage from "../page/DriverBlocklist/DriverBlockListPage";
import DriverDetailsPage from "../page/DriverDetails/DriverDetailsPage";
import DriverListPage from "../page/DriverList/DriverListPage";
import DriverListDetailsPage from "../page/DriverlistDetails/DriverlistDetailspage";
import EditSubscriptionPage from "../page/EditSubscription/EditSubscriptionPage";
import SubscriptionAddPage from "../page/SubscriptionAddPage/SubscriptionAddPage";
import SubscriptionCardPage from "../page/SubscriptionCardPage/SubscriptionCardPage";
import UserDetailsPage from "../page/UserDetails/UserDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <AdminRoutes>
      // </AdminRoutes>
      <MainLayout />
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "users-details",
        element: <UserDetailsPage />,
      },
      {
        path: "driver",
        element: <DriverPage />,
      },

      {
        path: "driver-details",
        element: <DriverDetailsPage />,
      },

      {
        path: "driver-list",
        element: <DriverListPage />,
      },

      {
        path: "driver-details",
        element: <DriverDetailsPage />,
      },

      {
        path: "driverlist-details",
        element: <DriverListDetailsPage />,
      },
      {
        path: "blocklist",
        element: <DriverBlockListPage />,
      },

      {
        path: "contribution",
        element: <ContributionDetails />,
      },
      {
        path: "Earnings",
        element: <EarningsPage />,
      },

      {
        path: "ChangeRequest",
        element: <ChangeRequestPage />,
      },
      {
        path: "/ChangeRequest/Details/:id",
        element: <ChangeRequestDetailsPage />,
      },
      // {
      //   path: "Subscription",
      //   element: <SubscriptionPage />,
      // },
      {
        path: "Subscription/add",
        element: <SubscriptionAddPage />,
      },
      {
        path: "/Subscription/:id",
        element: <EditSubscriptionPage />,
      },
      {
        path: "/SubscriptionCard",
        element: <SubscriptionCardPage />,
      },
      {
        path: "personal-info",
        element: <PersonalInformationPage />,
      },
      {
        path: "edit-personal-info",
        element: <EditPersonalInformationPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "settings/personal-info",
        element: <PersonalInformationPage />,
      },

      {
        path: "settings/edit-personal-info",
        element: <EditPersonalInformationPage />,
      },
      {
        path: "settings/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/settings/edit-privacy-policy/:id",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "settings/terms-conditions",
        element: <TermsconditionPage />,
      },
      {
        path: "/settings/edit-terms-conditions/:id",
        element: <EditTermsConditions />,
      },
      {
        path: "settings/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/settings/edit-about-us/:id",
        element: <EditAboutUs />,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <h1>Auth Error</h1>,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "otp/:email",
        element: <Otp />,
      },
      {
        path: "new-password/:email",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
