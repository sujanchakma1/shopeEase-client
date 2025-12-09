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
import path from "path";
import Contact from "@/Page/Contact/Contact";

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
        Component: BuyProduct,
      },
      {
        path: "products/details/:id",
        Component: ProductDetails,
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
        Component: Orders
      }
    ],
  },
]);

export default router;
