import React from "react";
import NavigationItem from "./NavigationItem";
import IconItem from "./IconItem";
import Icon from "../utils/Icons";
export default function Navigation() {
  const icon = Icon();
  return (
    <nav className="navigation">
      <NavigationItem />
      <div className="icon_con">
        <IconItem>
          <icon.IoMdSearch size={22} />
        </IconItem>
        <IconItem>
          <icon.FaUser />
        </IconItem>
      </div>
    </nav>
  );
}
