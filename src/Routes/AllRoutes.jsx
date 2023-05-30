import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart";
import { ProductDetails } from "../Components/ProductDetails";
import { ProductPage } from "../Components/ProductPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    
    </Routes>
  );
};
