import { AuthContext } from '@/Contexts/AuthContext';
import React, { useContext } from 'react';

const UseAuth = () => {
  const auth = useContext(AuthContext)
  return auth
};

export default UseAuth;