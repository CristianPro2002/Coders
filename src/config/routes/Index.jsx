import { useState } from "react";
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { PATHSPROJECT } from "../../utils/constants/pathsProject";
import LayoutAdmin from "../../components/layouts/layoutAdmin/LayoutAdmin";
import Layout from "../../components/layouts/layout/Layout";
import Dashboard from "../../components/views/private/dashboard/Dashboard";
import CreatePlace from "../../components/views/private/place/create-place/CreatePlace";
import EditPlace from "../../components/views/private/place/edit-place/EditPlace";
import Products from "../../components/views/private/products/Products";
import Categories from "../../components/views/private/categories/Categories";
import Subcategories from "../../components/views/private/subcategories/Subcategories";
import NotFound from "../../components/views/notfound/NotFound";
import ErrorPage from "../../components/common/error/ErrorPage";
import Index from "../../components/views/public/home/Index";
import Login from "../../components/views/public/login/Login";
import Register from "../../components/views/public/register/Register";
import RecoveryPassword from "../../components/views/public/recoveryPassword/RecoveryPassword";
import ProtectedRoute from "./ProtectedRoute";
import Domain from "../../components/views/private/domain/Domain";

export default function Router({ stateAuth }) {
  const [isLoggedIn, setIsLoggedIn] = useState(stateAuth);

  const {
    login,
    register,
    recovery,
    dashboard,
    create_place,
    create_place_id,
    edit_place,
    products,
    categories,
    subcategories,
    domain_id,
  } = PATHSPROJECT;

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Navigate to={register} />} />
          <Route
            path={login}
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path={register} element={<Register />} />
          <Route path={recovery} element={<RecoveryPassword />} />
        </Route>
        <Route element={<ProtectedRoute canActivate={isLoggedIn} />}>
          <Route
            path={dashboard}
            element={<LayoutAdmin setIsLoggedIn={setIsLoggedIn} />}
            errorElement={<ErrorPage />}
          >
            <Route index element={<Dashboard />} errorElement={<ErrorPage />} />
            <Route
              path={create_place}
              element={<CreatePlace />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={create_place_id}
              element={<CreatePlace />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={edit_place}
              element={<EditPlace />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={products}
              element={<Products />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={categories}
              element={<Categories />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={subcategories}
              element={<Subcategories />}
              errorElement={<ErrorPage />}
            />
            <Route
              path={domain_id}
              element={<Domain />}
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
