const Reducer = (state, action) => {
  if (action.type === "ADDNOTE") {
    return {
      ...state,

      isModalOpen: true,
      modalContent: "New Note Added",
    };
  }
  if (action.type === "CLOSEMODAL") {
    return {
      ...state,

      isModalOpen: false,
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,

      isModalOpen: true,
      modalContent: "Note Deleted",
    };
  }

  return state;
};

export default Reducer;
