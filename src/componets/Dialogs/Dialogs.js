import dlg from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";

const Dialogs = (props) => {
   let usersElement = props.users.map((users) => (
      <DialogsItems users={users.name} key={users.id} id={users.id} />
   ));
   return (
      <div className={dlg.dialogs}>
         <div className={dlg.dialogs_items}>{usersElement}</div>
      </div>
   );
};

export default Dialogs;
