import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../img/1220.jpg";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={style.user}>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt="foto"
              className={style.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span className={style.name}>
          <div> {user.name}</div>
          <div>{user.status}</div>
        </span>
        <span className={style.location}>
          <div>{"Mogilev"} </div>
          <div> {"Belarus"} </div>
        </span>
      </span>
    </div>
  );
};

export default User;
