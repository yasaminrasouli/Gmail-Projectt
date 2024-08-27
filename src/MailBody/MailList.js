import React from "react";
import "./MailList.css";
import MailListBody from "./MailListBody";
import MailListBottom from "./MailListBottom";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Checkbox, Button } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function MailList() {
  return (
    <div className="maillist">
      <div className="maillistheader">
        <div className="maillistheader_ left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="maillistheader_right">
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="maillist_bottom">
        <MailListBottom icon={<InboxIcon />} title="Primary" selected={true} />
        <MailListBottom icon={<GroupIcon />} title="Social" />
        <MailListBottom icon={<LocalOfferIcon />} title="Promotions" />
      </div>
      <div>
        <MailListBody />
      </div>
    </div>
  );
}

export default MailList;
