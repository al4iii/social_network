const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const AVATAR_FOTO =
  "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg";

  let initialState = {
    posts: [
      {
        id: 1,
        maseege: "hi, how are you?",
        likesCount: 15,
        avatarforo: AVATAR_FOTO,
      },
      {
        id: 2,
        maseege: "it's my first post!!",
        likesCount: 101,
        avatarforo: AVATAR_FOTO,
      },
      {
        id: 3,
        maseege: "Have a goog day!!",
        likesCount: 17,
        avatarforo: AVATAR_FOTO,
      },
      {
        id: 4,
        maseege: "Yo",
        likesCount: 13,
        avatarforo: AVATAR_FOTO,
      },
      {
        id: 5,
        maseege: "Yo",
        likesCount: 104,
        avatarforo: AVATAR_FOTO,
      },
    ],
    date: {
      foto: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1e94b089-414e-4ee9-a40a-2f05a8957568/220x330",
      name: "Alexander Danilin",
      dob: "02.12.1983",
      city: "Mogilev",
      education: "speciaal",
      webSite: "https://www.instagram.com/sasha_al4i/.com/sasha_al4i",
    },
    newPostText: "",
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        maseege: state.newPostText,
        likesCount: 1,
        avatarforo: AVATAR_FOTO,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPOstTextActionCreater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  });
export default profileReducer;
