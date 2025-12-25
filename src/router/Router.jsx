import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "@/Page/Homepage/Home";
import Register from "@/Page/AuthPage/Register";
import Login from "@/Page/AuthPage/Login";
import Products from "@/Page/Products/Products";
import ProductDetails from "@/Page/Products/ProductDetails";
import BuyProduct from "@/Page/Products/BuyProduct";
import About from "@/Page/About/About";
import DashboardLayout from "@/Layout/DashboardLayout";
import Overview from "@/Page/Dashboard/Overview";
import Payments from "@/Page/Dashboard/User/Payments";
import Orders from "@/Page/Dashboard/User/Orders";
import Contact from "@/Page/Contact/Contact";
import Cart from "@/Page/Cart/Cart";
import PrivateRoute from "@/Routes/PrivateRoute";
import ErrorPage from "@/Shared/ErrorPage";
import PrivacyPolicy from "@/Page/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "@/Page/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "products/buy/:id",
        element: (
          <PrivateRoute>
            <BuyProduct></BuyProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "products/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "terms-conditions",
        Component: TermsConditions,
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Overview },
      {
        path: "payments/:orderId",
        Component: Payments,
      },
      {
        path: "orders",
        Component: Orders,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
