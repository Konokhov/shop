import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Layout from "components/Layout";
import Details from "./pages/Details";
import Basket from "./pages/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
}

export default App;
