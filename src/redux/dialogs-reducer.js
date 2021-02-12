const ADD_MASSEGE = "ADD-MASSEGE";
const UPDATE_NEW_MASSEGE_TEXT = "UPDATE-NEW-MASSEGE-TEXT";

const dialogsReducer = (state, action) => {
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
