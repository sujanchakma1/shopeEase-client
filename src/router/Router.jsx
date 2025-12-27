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
import Payments from "@/Page/Dashboard/User/Payments";
import Orders from "@/Page/Dashboard/User/Orders";
import Contact from "@/Page/Contact/Contact";
import Cart from "@/Page/Cart/Cart";
import PrivateRoute from "@/Routes/PrivateRoute";
import ErrorPage from "@/Shared/ErrorPage";
import PrivacyPolicy from "@/Page/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "@/Page/TermsConditions/TermsConditions";
import UserHome from "@/Page/Dashboard/User/UserHome";
import AdminRoute from "@/Routes/AdminRoute";
import AdminHome from "@/Page/Dashboard/Admin/AdminHome";
import DashboardIndexRedirect from "@/Page/Dashboard/DashboardIndexRedirect/DashboardIndexRedirect";
import UserRoute from "@/Routes/UserRoute";
import ManageUser from "@/Page/Dashboard/Admin/ManageUser";
import AddProduct from "@/Page/Dashboard/Admin/AddProduct";
import ManageProducts from "@/Page/Dashboard/Admin/ManageProducts";
import UpdateProduct from "@/Page/Dashboard/Admin/UpdateProduct";
import ManageOrder from "@/Page/Dashboard/Admin/ManageOrder";
import Forbidden from "@/Shared/ForbiddenPage";

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
      { index: true, Component: DashboardIndexRedirect },
      {
        path: "user-home",
        element: (
          <UserRoute>
            <UserHome></UserHome>
          </UserRoute>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-product",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-order",
        element: (
          <AdminRoute>
            <ManageOrder />
          </AdminRoute>
        ),
      },
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
  {
    path: "/forbidden",
    Component: Forbidden,
  },
]);

export default router;
