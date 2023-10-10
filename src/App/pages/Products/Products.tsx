import React, { useEffect } from "react";
import PageLayout from "components/PageLayout";
import List from "./components/List";
import ContainerLayout from "components/ContainerLayout";
import { fetchProducts } from "../../../store/productsApiSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

function Products() {
  const { data, isLoading, error } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <PageLayout>
      <ContainerLayout>
        {error && <h1>{error}</h1>}
        {isLoading && <h1>Загрузка...</h1>}
        {!isLoading && <List data={data} />}
      </ContainerLayout>
    </PageLayout>
  );
}

export default Products;
