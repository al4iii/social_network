import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

const AVATAR_FOTO =
  "https://vokrug.tv/pic/news/6/4/8/2/6482f7af3bdb876ded2e755c5b37bc90.jpg";

let store = {
  _state: {
    prolifePage: {
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
    },
    dialogsPage: {
      dialog: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Alina" },
        { id: 4, name: "Zora" },
        { id: 5, name: "Kon'" },
      ],
      maseeges: [
        { id: 1, maseege: "Hi?" },
        { id: 2, maseege: "How are you?" },
        { id: 3, maseege: "Have a goog day!!" },
        { id: 4, maseege: "Yo" },
        { id: 5, maseege: "Yo" },
      ],
      newMassegeText: "",
    },
    navbarPage: {
      avatar: [
        {
          name: "ilich",
          avatarforo: AVATAR_FOTO,
        },
        {
          name: "albert",
          avatarforo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2f03P_CydoVTsypLTSdNSHgbkyQqjIQZWQ&usqp=CAU",
        },
        {
          name: "victor",
          avatarforo:
            "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/225/986/5.jpg",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state was chengen");
  },

  getState() {
    return this._state;
  },
  subsctribe(observer) {
    this._callSubscriber = observer; // patern
  },

  dispatch(action) {
    this._state.prolifePage = profileReducer(this._state.prolifePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
    this._callSubscriber(this._state);
  },
};


window.store = store;
export default store;
