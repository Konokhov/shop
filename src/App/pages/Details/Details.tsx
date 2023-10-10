import React from "react";
import PageLayout from "components/PageLayout";
import DetailsCard from "./components/DetailsCard";
import ContainerLayout from "components/ContainerLayout";

function Details() {
  return (
    <PageLayout>
      <ContainerLayout>
        <DetailsCard />
      </ContainerLayout>
    </PageLayout>
  );
}

export default Details;
