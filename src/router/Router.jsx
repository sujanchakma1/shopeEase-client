import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Homepage/Home";
import RootLayout from "../Layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
]);

export default router;
