const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
         };
         let stateCopyProfile = { ...state };
         stateCopyProfile.posts = [...state.posts];
         stateCopyProfile.posts.push(newPost);
         stateCopyProfile.newPostText = "";
         return stateCopyProfile;
      case UPDATE_NEW_POST_TEXT:
         let stateCopy = { ...state };
         stateCopy.newPostText = action.newText;
         return stateCopy;
      default:
         return state;
   }
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
