import React from "react";
import * as axios from "axios";
import style from "./Users.module.css";
import userPhoto from "./../../img/1220.jpg";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={ getUsers}> Get users </button>
      {props.users.map((u) => (
        <div key={u.id} className={style.item}>
          <span>
            <div>
              <img
                src={u.photos.small !== null ? u.photos.small : userPhoto}
                alt="foto"
                className={style.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  unfollow
                </button>
              )}
            </div>
          </span>
          <span>
            <span className={style.name}>
              <div> {u.name}</div>
              <div>{u.status}</div>
            </span>
            <span className={style.location}>
              <div>{"u.location.city"} </div>
              <div> {"u.location.contry"} </div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
