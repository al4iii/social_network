const ADD_POST = "ADD-POST";
const ADD_MASSEGE = "ADD-MASSEGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MASSEGE_TEXT = "UPDATE-NEW-MASSEGE-TEXT";
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
  subsctibe(observer) {
    this._callSubscriber = observer; // patern
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        maseege: this._state.prolifePage.newPostText,
        likesCount: 1,
        avatarforo: AVATAR_FOTO,
      };
      this._state.prolifePage.posts.push(newPost);
      this._state.prolifePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.prolifePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MASSEGE) {
      let newMassege = {
        id: 10,
        maseege: this._state.dialogsPage.newMassegeText,
      };
      this._state.dialogsPage.maseeges.push(newMassege);
      this._state.dialogsPage.newMassegeText = "";
      this._callSubscriber(this._state);
      debugger;
    } else if (action.type === UPDATE_NEW_MASSEGE_TEXT) {
      this._state.dialogsPage.newMassegeText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const addNewMassegeActionCreater = () => ({ type: ADD_MASSEGE });
export const updateNewPOstTextActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const updateNewMassegeTextActionCreater = (text) => ({
  type: UPDATE_NEW_MASSEGE_TEXT,
  newText: text,
});

window.store = store;
export default store;
