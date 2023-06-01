import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Loader } from "../../components/Loader";

export function ProtectedLayout() {
  const { auth, loading } = useAuth();
  if (loading) {
    return (
      <div className="overlay-box">
        <Loader />
      </div>
    );
  }
  return <>{auth._id ? <Outlet /> : <Navigate to="/" />}</>;
}

export default ProtectedLayout;
