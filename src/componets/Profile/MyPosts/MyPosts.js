import mp from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
   let postsElements = props.posts.map((p) => (
      <Post message={p.message} key={p.id} />
   ));

   let newPostElement = React.createRef();

   let addPost = () => {
      props.addPost();
   };

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   };

   return (
      <div className={mp.myposts_container}>
         <div className={mp.my_posts}>
            <input
               className={mp.my_posts_input}
               type="text"
               ref={newPostElement}
               onChange={onPostChange}
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
