import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../img/1220.jpg";

let Users = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize;
    pagesCount = Math.ceil(pagesCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={`${
                 props.currentPage === p && style.selectedPage
              } ${style.spanPage} `}
              onClick={(e) => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
      { props.users.map((u) => (
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