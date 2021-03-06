import React from "react";
import styles from "./Avatar.module.css";

const Avarar = ({ avatarforo, name }) => {
  return (
    <div>
      <div className={styles.item}>
        <img src={avatarforo} />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Avarar;
