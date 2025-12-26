import { Navigate, Outlet } from "react-router";
import Loading from "@/Page/Loading/Loading";
import UseUserRole from "@/Hook/UserRole";

const DashboardIndexRedirect = () => {
  const { role, isLoading } = UseUserRole();

  if (isLoading) return <Loading />;

  if (role === "admin") {
    return <Navigate to="/dashboard/admin-home" replace />;
  }
  return <Navigate to="/dashboard/user-home" replace />; // Optional: userHome route
};

export default DashboardIndexRedirect;
