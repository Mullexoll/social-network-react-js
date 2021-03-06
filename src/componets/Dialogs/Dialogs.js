import dlg from "./Dialogs.module.css";
import DialogsItems from "./DialogsItems/DialogsItems";
import Message from "./Message/Message";

const Dialogs = (props) => {
   let state = props.dialogsPage;

   let usersElement = props.dialogsPage.users.map((users) => (
      <DialogsItems users={users.name} key={users.id} id={users.id} />
   ));

   let messageElements = state.messages.map((m) => (
      <Message message={m.message} />
   ));

   let newMessageBody = props.newMessageBody;

   let onSendMessageClick = () => {
      props.onSendMessageClick();
   };
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.onNewMessageChange(body);
   };

   return (
      <div className={dlg.dialogs}>
         <div className={dlg.dialogs_items}>{usersElement}</div>
         <div>
            <div>
               <div>{messageElements}</div>
               <input
                  onChange={onNewMessageChange}
                  value={newMessageBody}
                  placeholder="Введите Ваше Сообщение"
               ></input>
               <button onClick={onSendMessageClick}>Отправить</button>
            </div>
         </div>
      </div>
   );
};

export default Dialogs;
