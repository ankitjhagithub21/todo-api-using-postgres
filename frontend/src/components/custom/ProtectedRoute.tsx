import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/UserContext";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if(loading){
    return <p>Loading...</p>
  }
  
  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
