import React from "react";
import "./dialogbox.css";
import CloseIcon from "@mui/icons-material/Close";

function ComposeContent() {
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>new message</h3>
        <CloseIcon className="sendMail_close" />
      </div>
    </div>
  );
}

export default ComposeContent;
