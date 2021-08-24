import hdr from "./Header.module.css";
import logo from "./../../images/logo.png";

const Header = () => {
   return (
      <div className={hdr.header}>
         <div className={hdr.img_logo}>
            <img src={logo} alt="main-logo"></img>
         </div>
         <div className={hdr.search}>
            <input placeholder="Поиск"></input>
         </div>
         <div className={hdr.name}>Muliar Oleksii </div>
         <div>
            <button className={hdr.exitBtn}>Выход</button>
         </div>
      </div>
   );
};

export default Header;
