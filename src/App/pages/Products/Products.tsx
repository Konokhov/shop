import React, { useEffect } from "react";
import PageLayout from "components/PageLayout";
import List from "./components/List";
import { fetchProducts } from "../../../store/productsApiSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

function Products() {
  const { data, isLoading, error } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(isLoading);
    console.log(error);
  }, [data, isLoading, error]);

  return (
    <PageLayout>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Загрузка...</h1>}
      {!isLoading && <List data={data} />}
    </PageLayout>
  );
}

export default Products;
