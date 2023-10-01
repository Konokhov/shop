import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Layout from "components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
