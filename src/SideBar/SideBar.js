import SideBarOption from "./SideBarOption";
import "./SideBar.css";
import { Button, IconButton, Dialog, DialogTitle } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarredIcon from "@mui/icons-material/Star";
import SnoozedIcon from "@mui/icons-material/AccessTime";
import ImportantIcon from "@mui/icons-material/LabelImportant";
import SentIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Note";
import MoreIcon from "@mui/icons-material/ExpandMore";
import PlusIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="SideBar">
        <Button
          className="sidebar_compose"
          startIcon={<PlusIcon fontSize="large" />}
          onClick={() => dispatch(openSendMessage())}
        >
          Compose
        </Button>
        <SideBarOption
          Icon={InboxIcon}
          title="Inbox"
          number={45}
          selected={true}
        />
        <SideBarOption Icon={StarredIcon} title="Starred" number={45} />
        <SideBarOption Icon={SnoozedIcon} title="Snoozed" number={45} />
        <SideBarOption Icon={ImportantIcon} title="Important" number={45} />
        <SideBarOption Icon={SentIcon} title="Sent" number={45} />
        <SideBarOption Icon={DraftsIcon} title="Drafts" number={45} />
        <SideBarOption Icon={MoreIcon} title="More" number={45} />
        <div className="sidebar_icon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <LocalPhoneIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default SideBar;
