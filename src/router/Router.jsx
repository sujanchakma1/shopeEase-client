import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "@/Page/Homepage/Home";
import Register from "@/Page/AuthPage/Register";
import Login from "@/Page/AuthPage/Login";
import Products from "@/Page/Products/Products";
import ProductDetails from "@/Page/Products/ProductDetails";
import ProductSell from "@/Page/Products/ProductSell";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/product/buy/:id",
        Component: ProductSell
      },
      {
        path: "/products/details/:id",
        Component: ProductDetails
      }
    ],
  },
]);

export default router;
