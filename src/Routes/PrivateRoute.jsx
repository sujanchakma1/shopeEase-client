import UseAuth from "@/Hook/UseAuth";
import Loading from "@/Page/Loading/Loading";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Please login first",
        confirmButtonColor: "#6366f1",
      }).then(() => {
        setShowAlert(true);
      });
    }
  }, [loading, user]);

  if (loading) {
    return <Loading />;
  }

  if (!user && showAlert) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  if (!user) return null;

  return children;
};

export default PrivateRoute;
