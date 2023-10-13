import React, { useEffect } from "react";
import PageLayout from "components/PageLayout";
import ContainerLayout from "components/ContainerLayout";
import BasketList from "./components/BasketList";
import Loader from "components/Loader";
import { fetchBasket } from "../../../store/basket";
import { fetchBasketItem } from "../../../store/basket";
import EmptyCart from "./components/EmptyCart";
import styles from "./Basket.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

function Basket() {
  const { data, isLoading, error } = useAppSelector((store) => store.basket);
  const { basketData } = useAppSelector((store) => store.basket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(fetchBasketItem(data.products));
    }
  }, [data]);

  return (
    <PageLayout>
      <ContainerLayout>
        {isLoading && <Loader />}
        {data?.products.length === 0 && <EmptyCart />}
        {data && <BasketList basketData={basketData} data={data} />}
      </ContainerLayout>
    </PageLayout>
  );
}

export default Basket;
