import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Layout from "components/Layout";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
