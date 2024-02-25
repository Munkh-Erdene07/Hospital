import React from "react";
import ServiceInformaton from "../../data/ServiceInformation";
export default function ServiceChild() {
  return (
    <React.Fragment>
      {ServiceInformaton.map((el, index) => (
        <div className="service__child" key={index}>
          <div className="service_icon">{el.icon}</div>
          <div className="service__caption">
            <p className="service__title">{el.title}</p>
            <span>{el.caption}</span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
