import React from "react";
import style from "./Users.module.css";
import user_avatar from "../../images/user_avatar.png";

let Users = (props) => {
   console.log(props);
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
                     {p}{" "}
                  </span>
               );
            })}
         </div>
         <div className={style.users_container}>
            {props.users.map((u) => (
               <div className={style.users_desc} key={u.id}>
                  <div>
                     <div>
                        <img
                           className={style.user_avatar}
                           src={user_avatar}
                           alt="Avatar"
                        ></img>
                     </div>
                     <div>
                        {u.followed ? (
                           <button
                              onClick={() => {
                                 props.unfollow(u.id);
                              }}
                           >
                              Unfollow
                           </button>
                        ) : (
                           <button
                              onClick={() => {
                                 props.follow(u.id);
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
