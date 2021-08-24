import post from "./Post.module.css";
import av_img from "../../../../images/male_boy_person.png";

const Post = (props) => {
   return (
      <div className={post.post_card} key={props.id}>
         <div className={post.av_img}>
            <img src={av_img} alt="avatar"></img>
         </div>
         <div className={post.msg}>{props.message}</div>
      </div>
   );
};

export default Post;
