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
    case ADD_MASSEGE: {
      let newMassege = {
        id: 10,
        maseege: state.newMassegeText,
      };
      let stateCopy = { ...state };
      stateCopy.maseeges = [...state.maseeges];
      stateCopy.maseeges.push(newMassege);
      stateCopy.newMassegeText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MASSEGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMassegeText = action.newText;
      return stateCopy;
    }
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
