import React from "react";

export default function CarouselBtn({
  click,
  children,
}: {
  click: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className="caruoselBtn" onClick={click}>
      {children}
    </button>
  );
}
