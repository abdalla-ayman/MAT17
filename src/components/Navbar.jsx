import React,{useContext} from "react";
import styles from "../styles/Navbar.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  // get logout from userContext
  const { logout} = useContext(UserContext);
  const user = {id:1,username:"momen"}
  const onLogout = () => {
    logout();
  };
  console.log(user);
  return (
    <div className={styles.navbar}>
      <div className={styles.account}>
        <div className={styles.account_info}>
          <Typography
            style={{ cursor: "pointer" }}
            component="p"
            variant="body1"
            color="primary"
          >
            {user.username}
          </Typography>
          <Typography component="p" variant="caption" color="secondary.light">
            User ID: {user.id}
          </Typography>
        </div>
        <div className={styles.logout} onClick={onLogout}>
          <LogoutIcon color="secondary.light"></LogoutIcon>
          <Typography
            component="p"
            variant="caption"
            fontWeight="light"
            color="secondary.light"
          >
            Logout
          </Typography>
        </div>
      </div>
    </div>
  );
}
