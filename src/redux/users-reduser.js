const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      foloUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330",
      fullName: "al4i",
      followed: true,
      status: "i like sex",
      location: { city: "Mogilev", contry: " Belarus" },
    },
    {
      id: 2,
      foloUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330",
      fullName: "sasha",
      followed: false,
      status: "i like cola",
      location: { city: "Minsk", contry: " Belarus" },
    },
    {
      id: 3,
      foloUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330",
      fullName: "gora",
      followed: true,
      status: "i like study",
      location: { city: "Gomel", contry: " Belarus" },
    },
    {
      id: 4,
      foloUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330",
      fullName: "alina",
      followed: true,
      status: "i like ball",
      location: { city: "Kiev", contry: " Ukraine" },
    },
    {
      id: 5,
      foloUrl:
        "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330",
      fullName: "mishel",
      followed: false,
      status: "i like univer",
      location: { city: "Riga", contry: "Litva" },
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
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;
