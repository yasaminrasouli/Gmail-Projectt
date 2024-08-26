import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import companyLogo from "./gmail_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header">
      <div className="left-menu">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={companyLogo} alt="logo" />
      </div>
      <div className="center-menu">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="right-menu">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
