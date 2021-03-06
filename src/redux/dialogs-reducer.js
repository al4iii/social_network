const ADD_MASSEGE = "dialogs/ADD-MASSEGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MASSEGE:
      let newMassege = action.newMassegeText;
      let massege = { id: 10, maseege: newMassege };
      return {
        ...state,
        maseeges: [...state.maseeges, massege],
      };
    default:
      return state;
  }
};

export const sendMassege = (newMassegeText) => ({ type: ADD_MASSEGE, newMassegeText,});

export default dialogsReducer;
