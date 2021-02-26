import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../img/1220.jpg";
import { NavLink } from "react-router-dom";
import { render } from "@testing-library/react";

class Users extends React.Component {
  render() {
    let pagesCount = this.props.totalUsersCount / this.props.pageSize;
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
                className={`${this.props.currentPage === p && style.selectedPage}
               ${style.spanPage} `}
                onClick={(e) => this.props.onPageChanged(p)}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={style.item}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt="foto"
                    className={style.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={this.props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      this.props.unfollow(u.id);
                      this.forceUpdate()
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={this.props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      this.props.follow(u.id);
                      this.forceUpdate()
                    }}
                  >
                    Follow
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
                <div>{"Mogilev"} </div>
                {/* {"u.location.city"} */}
                <div> {"Belarus"} </div>
                {/* {"u.location.contry"} */}
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
