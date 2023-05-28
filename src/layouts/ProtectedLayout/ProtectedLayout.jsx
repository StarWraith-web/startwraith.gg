import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export function ProtectedLayout() {
  const { auth, loading } = useAuth();
  if (loading) {
    return <p>cargando...</p>;
  }
  return <>{auth._id ? <Outlet /> : <Navigate to="/" />}</>;
}

export default ProtectedLayout;
