import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar/Avarar";
import styles from "./Navbar.module.css";

const Navbar = ({ navbarPage }) => {
  let friendsElement = navbarPage.avatar.map((p) => (
    <Avatar name={p.name} key={p.id} avatarforo={p.avatarforo} />
  ));
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to="/profile" activeClassName={styles.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs" activeClassName={styles.activeLink}>
          Messeges
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/users" activeClassName={styles.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news" activeClassName={styles.activeLink}>
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" activeClassName={styles.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.setting}`}>
        <NavLink to="/setting" activeClassName={styles.activeLink}>
          Setting
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.setting}`}>
        <NavLink to="/friends" activeClassName={styles.activeLink}>
          Friends
          {/* <div className={styles.item}>{friendsElement}</div> */}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
