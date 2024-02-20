import React from "react";
import { Link } from "react-router-dom";
import navigationDetail from "../../data/Navigation";
import NavigationItemDetail from "./NavigationItemDetail";
export default function NavigationItem() {
  return (
    <ul className="navigationItem">
      {navigationDetail.map((el, index) => (
        <li key={index}>
          <Link to={el.href ? el.href : "#"}>{el.value}</Link>
          {el.detail && <NavigationItemDetail detail={el.detail} />}
        </li>
      ))}
    </ul>
  );
}
