import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "../Components/ProductDetails";
import { ProductPage } from "../Components/ProductPage";
import { AddProducts } from "../Components/AddProducts";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/addProduct" element={<AddProducts/>} />
    
    </Routes>
  );
};
