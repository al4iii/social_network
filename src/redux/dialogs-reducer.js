const ADD_MASSEGE = "ADD-MASSEGE";
const UPDATE_NEW_MASSEGE_TEXT = "UPDATE-NEW-MASSEGE-TEXT";
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MASSEGE:
      let newMassege = {
        id: 10,
        maseege: state.newMassegeText,
      };
      state.maseeges.push(newMassege);
      state.newMassegeText = "";
      return state;
    case UPDATE_NEW_MASSEGE_TEXT:
      state.newMassegeText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addNewMassegeActionCreater = () => ({ type: ADD_MASSEGE });
export const updateNewMassegeTextActionCreater = (text) => ({
  type: UPDATE_NEW_MASSEGE_TEXT,
  newText: text,
});

export default dialogsReducer;
