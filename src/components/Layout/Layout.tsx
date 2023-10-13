import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import { fetchBasket } from "../../store/basket";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

function Layout() {
  const { data } = useAppSelector((store) => store.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBasket());
  }, []);

  return (
    <>
      <Header data={data} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
