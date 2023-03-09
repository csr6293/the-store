import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import App from './App';
import ProductDetail from "./components/dashboard/ProductDetail";
import NavBar from "./components/navbar";

const RouteX = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWithNavBar/>}>
        <Route exact path="products/:id" element={<ProductDetail />} />
        <Route exact path="products" element={<ProductDetail />} />
        <Route exact index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function RouteWithNavBar() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default RouteX;
