import UseAuth from '@/Hook/UseAuth';
import useUserRole from '@/Hook/UserRole';
import Loading from '@/Page/Loading/Loading';
import React from 'react';
import { Navigate, useLocation } from 'react-router';

const UserRoute = ({ children }) => {
 const { user, loading } = UseAuth();
  const { role, isLoading } = useUserRole();
  const location = useLocation();

  if (loading || isLoading) return <Loading />;

  if (!user || role !== "user") {
    return <Navigate state={location.pathname} to="/forbidden"></Navigate>;
  }

  return children;
};

export default UserRoute;