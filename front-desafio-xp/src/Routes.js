import { BrowserRouter, Route, Routes as RouteWrapper } from "react-router-dom";
import Products from "./pages/Products";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/usuarios" element={<Users />} />
        <Route path="/produtos" element={<Products />} />
      </RouteWrapper>
    </BrowserRouter>
  );
}
