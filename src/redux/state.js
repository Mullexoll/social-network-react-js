const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
   _state: {
      profilePage: {
         posts: [
            {
               id: 1,
               message:
                  "Замість відпочинку – прибирає сміття. Він мандрує світом і не лише милується природою, але робить її чистішою. Турист з Німеччини Вільм Мюллер приїхав на Буковину і не зміг спокійно дивитися на засмічений берег Дністра. І встиг стати зіркою соцмереж в Україні.",
            },
            {
               id: 2,
               message:
                  "Подібна ситуація в історії легкої атлетики на Олімпіадах траплялася понад 100 років тому! А в стрибках у висоту таке сталося взагалі уперше Це історія, друже. Сказав один зі стрибунів іншому після розв'язки фіналу",
            },
            {
               id: 3,
               message:
                  "Ще одна медаль для України Алла Черкасова взяла бронзу у вільній боротьбі Дякуємо та пишаємось",
            },
         ],
         newPostText: "Что у Вас нового?",
      },
      dialogsPage: {
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
      },
   },

   getState() {
      return this._state;
   },

   callSubscriber() {
      console.log("State changed");
   },

   subscribe(observer) {
      this.callSubscriber = observer;
   },

   dispatch(action) {
      if (action.type === "ADD-POST") {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = "";
         this.callSubscriber(this._state);
      } else if (action.type === "UPDATE-NEW-POST-TEXT") {
         this._state.profilePage.newPostText = action.newText;
         this.callSubscriber(this._state);
      } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
         this._state.dialogsPage.newMessageBody = action.body;
         this.callSubscriber(this._state);
      } else if (action.type === "SEND-MESSAGE") {
         let body = {
            id: 6,
            message: this._state.dialogsPage.newMessageBody,
         };
         this._state.dialogsPage.newMessageBody = "";
         this._state.dialogsPage.messages.push(body);
         this.callSubscriber(this._state);
      }
   },
};

export const addPostActionCreator = () => {
   return {
      type: ADD_POST,
   };
};

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
   };
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

export default store;
