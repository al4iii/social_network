import React from "react";
import style from "./Users.module.css";

const Users = (props) => {

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.foloUrl} alt="foto" className={style.userPhoto} />
            </div>
            <div>
              {u.followed
              ? <button onClick={() => {props.unfollow(u.id)}}>follow</button>
              : <button onClick={() => {props.follow(u.id)}}>unfollow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div> {u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div> {u.location.contry}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
