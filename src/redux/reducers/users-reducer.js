const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
   users: [
      {
         id: 1,
         photoUrl:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
         followed: false,
         fullName: "Алексей",
         status: "Всё отлично",
         location: { city: "Винница", country: "Украина" },
      },
      {
         id: 2,
         photoUrl:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
         followed: true,
         fullName: "Алексей",
         status: "В отпуске",
         location: { city: "New York", country: "USA" },
      },
      {
         id: 3,
         photoUrl:
            "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
         followed: false,
         fullName: "Алексей",
         status: "Всё отлично",
         location: { city: "Киев", country: "Украина" },
      },
   ],
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: true };
               }
               return u;
            }),
         };

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: false };
               }
               return u;
            }),
         };

      case SET_USERS: {
         return {
            ...state,
            users: [...state.users, ...action.users],
         };
      }

      default:
         return state;
   }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
