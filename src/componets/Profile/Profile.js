import BG from "./BG-image/BG";
import Description from "./Description/Description";
import Edit from "./Edit-description/Edit";
import MainAvatar from "./MainAvatar/MainAvatar";
import MyPosts from "./MyPosts/MyPosts";
import prf from "./Profile.module.css";

const Profile = (props) => {
   return (
      <div className={prf.profile}>
         <BG />
         <div className={prf.avaDesc}>
            <MainAvatar />
            <Description />
            <Edit />
            <MyPosts
               posts={props.profilePage.posts}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
            />
         </div>
      </div>
   );
};

export default Profile;
