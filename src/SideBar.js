import SideBarOption from "./SideBarOption";
import "./SideBar.css";
import { Button } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarredIcon from "@mui/icons-material/Star";
import SnoozedIcon from "@mui/icons-material/Snooze";
import SentIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import MoreIcon from "@mui/icons-material/ArrowDownwardSharp";
import PlusIcon from "@mui/icons-material/Add";

function SideBar() {
  return (
    <div className="SideBar">
      <Button
        className="sidebar_compose"
        startIcon={<PlusIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SideBarOption Icon={InboxIcon} title="Inbox" number={45} />
      <SideBarOption Icon={StarredIcon} title="Starred" number={45} />
      <SideBarOption Icon={SnoozedIcon} title="Snoozed" number={45} />
      <SideBarOption Icon={SentIcon} title="Sent" number={45} />
      <SideBarOption Icon={DraftsIcon} title="Drafts" number={45} />
      <SideBarOption Icon={MoreIcon} title="More" number={45} />
    </div>
  );
}

export default SideBar;
