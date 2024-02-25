import React from "react";
export default function Time({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div className="time__child">
      <span className="time__title">{title}</span>
      {children}
    </div>
  );
}
