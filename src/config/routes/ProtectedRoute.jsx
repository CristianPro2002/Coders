import { Navigate, Outlet } from "react-router-dom";
import { PATHSPROJECT } from "../../utils/constants/pathsProject";

export default function ProtectedRoute({ canActivate, redirectPath = PATHSPROJECT.login }) {
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}
