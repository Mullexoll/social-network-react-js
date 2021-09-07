import dialogReducer from "./reducers/dialog-reducer";
import profileReducer from "./reducers/profile-reducer";

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
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

      this.callSubscriber(this._state);
   },
};

export default store;
