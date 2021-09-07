import {
   updateNewMessageBodyCreator,
   sendMessageCreator,
} from "../../redux/reducers/dialog-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      newMessageBody: state.newMessageBody,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onSendMessageClick: () => {
         dispatch(sendMessageCreator());
      },
      onNewMessageChange: (body) => {
         let action = updateNewMessageBodyCreator(body);
         dispatch(action);
      },
   };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
