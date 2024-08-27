import React from "react";
import "./MailList.css";

function MailListBottom({ title, icon, selected }) {
  return (
    <div
      className={`maillist_bottom_option ${
        selected && "maillist_bottom_option_active"
      }`}
    >
      <span>{icon}</span>
      <p>{title}</p>
    </div>
  );
}

export default MailListBottom;
