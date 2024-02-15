import React from "react";
import Container from "../layouts/productpage/Container";
import ContentLeft from "../layouts/productpage/ContentLeft";
import ContentR from "../layouts/productpage/ContentR";

export default function ProductPage() {
  return (
    <div className={` pt-[100px] `}>
      <Container>
        <ContentLeft />
        <ContentR />
      </Container>
    </div>
  );
}
