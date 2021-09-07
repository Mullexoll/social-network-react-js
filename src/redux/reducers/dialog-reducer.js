const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
   users: [
      {
         id: 1,
         name: "Алексей",
      },
      {
         id: 2,
         name: "Юлия",
      },
      {
         id: 3,
         name: "Константин",
      },
      {
         id: 4,
         name: "Андрей",
      },
      {
         id: 5,
         name: "Александр",
      },
      {
         id: 6,
         name: "Валентина",
      },
      {
         id: 7,
         name: "Диана",
      },
   ],
   messages: [
      { id: 1, message: "Сегодня облачно" },
      { id: 2, message: "Сегодня пасмурно" },
      { id: 3, message: "Завтра солнечно" },
      { id: 4, message: "Сегодня дождь" },
      { id: 5, message: "Сегодня ясно" },
   ],
   newMessageBody: "",
};

export const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         let stateCopy = { ...state };
         stateCopy.newMessageBody = { ...stateCopy.newMessageBody };
         stateCopy.newMessageBody = action.body;
         return stateCopy;
      case SEND_MESSAGE:
         let stateCopySendMessage = { ...state };
         let body = {
            id: 6,
            message: stateCopySendMessage.newMessageBody,
         };
         stateCopySendMessage.newMessageBody = { ...state.newMessageBody };
         stateCopySendMessage.newMessageBody = "";
         stateCopySendMessage.messages = [...state.messages];
         stateCopySendMessage.messages.push(body);
         return stateCopySendMessage;
      default:
         return state;
   }
};

export const updateNewMessageBodyCreator = (body) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body,
   };
};

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE,
   };
};
