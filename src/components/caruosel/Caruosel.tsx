import React from "react";
import CaruoselItem from "./CaruoselItem";
import CarouselBtn from "./CarouselBtn";
import CaruoselContainer from "./CaruoselContainer";
export default function Caruosel() {
  return (
    <section className="caruosel">
      <CaruoselContainer>
        <CaruoselItem></CaruoselItem>
      </CaruoselContainer>
    </section>
  );
}
