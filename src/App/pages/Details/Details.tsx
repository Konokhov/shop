import React, { useEffect } from "react";
import PageLayout from "components/PageLayout";
import DetailsCard from "./components/DetailsCard";
import ContainerLayout from "components/ContainerLayout";
import Loader from "components/Loader";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { fetchDetails } from "../../../store/details";

function Details() {
  const { data, isLoading, error } = useAppSelector((store) => store.details);
  const dispatch = useAppDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  return (
    <PageLayout>
      <ContainerLayout>
        {isLoading && <Loader />}
        {data && <DetailsCard data={data} />}
      </ContainerLayout>
    </PageLayout>
  );
}

export default Details;
