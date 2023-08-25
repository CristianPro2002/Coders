import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ canActivate, redirectPath = "/admin/login" }) {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
