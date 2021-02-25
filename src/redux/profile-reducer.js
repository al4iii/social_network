import { API } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
  posts: [
    {
      id: 1,
      maseege: "hi, how are you?",
      likesCount: 15,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 2,
      maseege: "it's my first post!!",
      likesCount: 101,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 3,
      maseege: "Have a goog day!!",
      likesCount: 17,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 4,
      maseege: "Yo",
      likesCount: 13,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
    {
      id: 5,
      maseege: "Yo",
      likesCount: 104,
      avatarforo:
        "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
    },
  ],
  date: {
    foto:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1e94b089-414e-4ee9-a40a-2f05a8957568/220x330",
    name: "Alexander Danilin",
    dob: "02.12.1983",
    city: "Mogilev",
    education: "speciaal",
    webSite: "https://www.instagram.com/sasha_al4i/.com/sasha_al4i",
  },
  profileFoto:
    "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        maseege: state.newPostText,
        likesCount: 0,
        avatarforo:
          "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg",
      };
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, post],
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});


export const getProfile = (userId) => {
  return (dispatch) => 
API.getProfile(userId).then((response) => {
  dispatch(setUserProfile(response));
});
};


export default profileReducer;
