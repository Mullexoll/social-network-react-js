import bg from "./BG.module.css";
import mainBgPhoto from "./../../../images/main-background.jpg";

const BG = () => {
   return (
      <div className={bg.mainPhoto}>
         <img src={mainBgPhoto} alt="mainBg"></img>
      </div>
   );
};

export default BG;
