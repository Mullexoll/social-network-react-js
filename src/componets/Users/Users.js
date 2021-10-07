import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../images/user_avatar.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div className={style.main_users_container}>
         <div className={style.number_sheet}>
            {pages.map((p) => {
               return (
                  <span
                     className={props.currentPage === p && style.selectedPage}
                     onClick={() => {
                        props.onPageChanged(p);
                     }}
                  >
                     {p}
                  </span>
               );
            })}
         </div>
         <div className={style.users_container}>
            {props.users.map((u) => (
               <div className={style.users_desc} key={u.id}>
                  <div>
                     <div>
                        <NavLink to={"/profile/" + u.id}>
                           <img
                              src={
                                 u.photos.small != null
                                    ? u.photos.small
                                    : userPhoto
                              }
                              className={style.user_avatar}
                              alt="UserPhoto"
                           ></img>
                        </NavLink>
                     </div>
                     <div>
                        {u.followed ? (
                           <button
                              disabled={props.followingInProgress}
                              onClick={() => {
                                 props.toggleFollowingProgress(true);
                                 axios
                                    .delete(
                                       `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                       {},
                                       {
                                          withCredentials: true,
                                          headers: {
                                             "API-KEY":
                                                "d31889e6-cf2e-4846-9a8c-097cd380f4d7",
                                          },
                                       }
                                    )
                                    .then((response) => {
                                       if (response.data.resultCode === 0) {
                                          props.unfollow(u.id);
                                       }
                                       props.toggleFollowingProgress(false);
                                    });
                              }}
                           >
                              Unfollow
                           </button>
                        ) : (
                           <button
                              disabled={props.followingInProgress}
                              onClick={() => {
                                 props.toggleFollowingProgress(true);

                                 axios
                                    .post(
                                       `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                       {},
                                       {
                                          withCredentials: true,
                                          headers: {
                                             "API-KEY":
                                                "d31889e6-cf2e-4846-9a8c-097cd380f4d7",
                                          },
                                       }
                                    )
                                    .then((response) => {
                                       if (response.data.resultCode === 0) {
                                          props.follow(u.id);
                                       }
                                       props.toggleFollowingProgress(false);
                                    });
                              }}
                           >
                              Follow
                           </button>
                        )}
                     </div>
                  </div>
                  <div>
                     <div className={style.users_name}>{u.name}</div>
                     <div>{u.id}</div>
                  </div>
                  <div>
                     <div>u.location.country</div>
                     <div>u.location.city</div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Users;
