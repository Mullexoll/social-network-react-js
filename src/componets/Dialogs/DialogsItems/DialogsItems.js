import dlg from "./DialogsItems.module.css";
import { NavLink } from "react-router-dom";

const DialogsItems = (props) => {
   return (
      <div className={dlg.dialog + " " + dlg.active} key={props.users.id}>
         <NavLink to={`/dialogs/` + props.id}>{props.users}</NavLink>
      </div>
   );
};

export default DialogsItems;
