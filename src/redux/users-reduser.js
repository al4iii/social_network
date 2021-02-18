const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   foloUrl:
    //     "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dc1c5a98-300a-486e-ad41-e3c5d1a53e25/220x330",
    //   fullName: "al4i",
    //   followed: true,
    //   status: "i like JS",
    //   location: { city: "Mogilev", contry: " Belarus" },
    // },
    // {
    //   id: 2,
    //   foloUrl:
    //     "https://manofmany.com/wp-content/uploads/2019/08/50-Medium-Length-Hairstyles-Haircut-Tips-for-Men-1.jpg",
    //   fullName: "sasha",
    //   followed: false,
    //   status: "i like coca-cola",
    //   location: { city: "Minsk", contry: " Belarus" },
    // },
    // {
    //   id: 3,
    //   foloUrl:
    //     "https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=6&m=1059661424&s=612x612&w=0&h=Wkp3Rs2F_90PtZu07-fR1YmzGjsw5qj73D42doCo1Gc=",
    //   fullName: "gora",
    //   followed: true,
    //   status: "i like study",
    //   location: { city: "Gomel", contry: " Belarus" },
    // },
    // {
    //   id: 4,
    //   foloUrl:
    //     "https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=6&m=969233490&s=612x612&w=0&h=3UW-GHQ2CksIelqKk0UKgy_7qExPsn1g8B2Q0zzU1xo=",
    //   fullName: "alina",
    //   followed: true,
    //   status: "i like basketball",
    //   location: { city: "Kiev", contry: " Ukraine" },
    // },
    // {
    //   id: 5,
    //   foloUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwhnBFLA9gNTP5I5uJ-qbpn2uzUEWRKvD2A&usqp=CAU",
    //   fullName: "mishel",
    //   followed: false,
    //   status: "i like my girl",
    //   location: { city: "Riga", contry: "Litva" },
    // },
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
