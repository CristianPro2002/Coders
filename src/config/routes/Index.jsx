import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Index from "../../components/views/public/place/home/Index";
import Layout from "../../components/layouts/layout/Layout";
import Categories from "../../components/views/public/place/categories/Categories";
import Products from "../../components/views/public/place/products/Products";
import NotFound from "../../components/views/notfound/NotFound";
import ErrorPage from "../../components/common/error/ErrorPage";

export default function Router() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<Index />} errorElement={<ErrorPage />} />
          <Route
            path="Categories"
            element={<Categories />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="Categories/:id"
            element={<Products />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
