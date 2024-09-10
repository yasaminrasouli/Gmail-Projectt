import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import companyLogo from "./gmail_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
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
        <Avatar onClick={signOut} src={user?.photoURL} />
      </div>
    </div>
  );
}

export default Header;
