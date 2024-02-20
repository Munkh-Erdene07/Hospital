import React from "react";

export default function CaruoselContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="carousel-container">{children}</section>;
}
