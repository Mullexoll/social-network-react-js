import { NavLink } from "react-router-dom";
import nb from "./Navbar.module.css";

const Navbar = () => {
   return (
      <div className={nb.navbar}>
         <div>
            <NavLink to="/profile" activeClassName={nb.activeLink}>
               Профиль
            </NavLink>
         </div>
         <div>
            <NavLink to="/dialogs" activeClassName={nb.activeLink}>
               Сообщения
            </NavLink>
         </div>
         <div>
            <NavLink to="/users" activeClassName={nb.activeLink}>
               Люди
            </NavLink>
         </div>
         <div>News</div>
         <div>Music</div>
         <div>Notification</div>
      </div>
   );
};

export default Navbar;
