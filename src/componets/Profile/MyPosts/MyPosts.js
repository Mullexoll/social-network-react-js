import mp from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {
   addPostActionCreator,
   updateNewPostTextActionCreator,
} from "../../../redux/state";

const MyPosts = (props) => {
   let postsElements = props.posts.map((p) => (
      <Post message={p.message} key={p.id} />
   ));

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   };

   return (
      <div className={mp.myposts_container}>
         <div className={mp.my_posts}>
            <input
               className={mp.my_posts_input}
               type="text"
               ref={newPostElement}
               onChange={onPostChange}
               value={props.newPostText}
            ></input>
            <button onClick={addPost} className={mp.my_posts_btn}>
               Добавить
            </button>
         </div>
         <div className={mp.myposts_cards}>{postsElements}</div>
      </div>
   );
};

export default MyPosts;
