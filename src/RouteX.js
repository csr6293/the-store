import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import ProductDetail from "./components/dashboard/ProductDetail";

const RouteX = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="products/:id" element={<ProductDetail />} />
        <Route exact path="products" element={<ProductDetail />} />
        <Route exact path="/" element={<App />} />
        <Route exact index element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteX;
