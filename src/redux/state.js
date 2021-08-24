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
      },
   },
   getState() {
      return this._state;
   },
   callSubscriber() {
      console.log("State changed");
   },
   addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this.callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this.callSubscriber(this._state);
   },
   subscribe(observer) {
      this.callSubscriber = observer;
   },
};

export default store;
