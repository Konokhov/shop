import React, { useEffect, useState, ChangeEvent, useCallback } from "react";
import PageLayout from "components/PageLayout";
import List from "./components/List";
import ContainerLayout from "components/ContainerLayout";
import ProductFilter from "./components/ProductFilter";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Loader from "components/Loader";
import { fetchProducts } from "../../../store/products";
import { fetchCategory } from "../../../store/category";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

function Products() {
  const [parameters, setParametrs] = useState({
    category: "",
    sort: "desc",
  });
  const { data, isLoading, error } = useAppSelector((store) => store.products);
  const { data: dataCategory } = useAppSelector((store) => store.category);
  const dispatch = useAppDispatch();

  const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setParametrs({
      ...parameters,
      category: e.target.value,
    });
  };

  const changeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setParametrs({
      ...parameters,
      sort: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts(parameters));
  }, [parameters]);

  return (
    <PageLayout>
      <ContainerLayout>
        <ProductFilter>
          <Categories categories={dataCategory} change={changeCategory} />
          <Sort change={changeSort} />
        </ProductFilter>
        {error && <h1>{error}</h1>}
        {isLoading && <Loader />}
        {!isLoading && <List data={data} />}
      </ContainerLayout>
    </PageLayout>
  );
}

export default Products;
