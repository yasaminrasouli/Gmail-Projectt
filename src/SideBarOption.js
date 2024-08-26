import React from "react";
import "./SideBar.css";

function SideBarOption({ number, title, Icon }) {
  return (
    <div className="sidebar_option">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SideBarOption;
