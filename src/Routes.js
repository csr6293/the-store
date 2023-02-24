import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import ProductDetail from "./components/dashboard/ProductDetail";

const RouteX = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/products" element={<App />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* <Route path="cart" element={<Cart />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteX;
