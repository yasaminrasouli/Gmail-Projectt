import React from "react";
import "./MailList.css";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "@mui/icons-material";

const leftIcons = [
  { icon: <ArrowBackIcon />, key: "back" },
  { icon: <MoveToInboxIcon />, key: "inbox" },
  { icon: <InfoIcon />, key: "info" },
  { icon: <DeleteIcon />, key: "delete" },
  { icon: <EmailIcon />, key: "email" },
  { icon: <WatchLaterIcon />, key: "later" },
  { icon: <CheckCircleIcon />, key: "check" },
  { icon: <ImportantIcon />, key: "important" },
  { icon: <MoreVertIcon />, key: "more" },
];

const rightIcons = [
  { icon: <PrintIcon />, key: "print" },
  { icon: <ExitToAppIcon />, key: "exit" },
];

function MailBody() {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <div className="mailbody">
      <div className="mailbody-header">
        <div className="mailbody-header-left">
          {leftIcons.map(({ icon, key }) => (
            <IconButton key={key}>{icon}</IconButton>
          ))}
        </div>
        <div className="mailbody-header-right">
          {rightIcons.map(({ icon, key }) => (
            <IconButton key={key}>{icon}</IconButton>
          ))}
        </div>
      </div>
      <div className="mailbox">
        <div className="mailbody_des">
          <div className="mailbody_description">
            <h2>{email.title}</h2>
            <ImportantIcon style={{ color: "#f7db64" }} />
            <p>{email.email}</p>
          </div>
          <span>{email.date}</span>
        </div>
        <div className="mailbody-header-content">
          <p>{email.subject}</p>
        </div>
      </div>
    </div>
  );
}

export default MailBody;
