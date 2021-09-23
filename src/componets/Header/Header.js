import hdr from "./Header.module.css";
import logo from "./../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
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
            {props.isAuth ? (
               props.login
            ) : (
               <NavLink className={hdr.exitBtn} to={"/login"}>
                  Вход
               </NavLink>
            )}
         </div>
      </div>
   );
};

export default Header;
