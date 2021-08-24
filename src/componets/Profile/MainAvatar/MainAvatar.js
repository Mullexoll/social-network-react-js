import ma from "./MainAvatar.module.css";
import avatar from "./../../../images/main-avatar.jpg";

const MainAvatar = () => {
   return <img className={ma.main_avatar} src={avatar} alt="Main Avatar"></img>;
};

export default MainAvatar;
