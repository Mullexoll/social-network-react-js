import BG from "./BG-image/BG";
import Description from "./Description/Description";
import Edit from "./Edit-description/Edit";
import MainAvatar from "./MainAvatar/MainAvatar";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import prf from "./Profile.module.css";

const Profile = (props) => {
   return (
      <div className={prf.profile}>
         <BG />
         <div className={prf.avaDesc}>
            <MainAvatar />
            <Description />
            <Edit />
            <MyPostsContainer store={props.store} />
         </div>
      </div>
   );
};

export default Profile;
