import React from "react";
import "./SideBar.css";

function SideBarOption({ number, title, Icon, selected }) {
  return (
    <div className={`sidebar_option ${selected && "sidebar_option--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SideBarOption;
