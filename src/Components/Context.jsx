import React from "react";
import { useContext } from "react";
import Note from "./Note";
import { nanoid } from "nanoid";
import Reducer from "./Reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    state: [],
    isModalOpen: false,
    modalContent: "",
  };

  // I used the context for the Alert

  const [state, dispatch] = React.useReducer(Reducer, initialState);

  function closeModal(params) {
    dispatch({ type: "CLOSEMODAL" });
  }

  const [notes, notesF] = React.useState([]);

  // save note into state
  function handleClick(e) {
    e.preventDefault();

    dispatch({ type: "ADDNOTE" });

    if (input.trim().length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: input,
        date: date.toLocaleDateString(),
      };

      const newNot = [...notes, newNote];
      notesF(newNot);

      inputF("");
    }
  }

  // map out note elements

  const NoteElements = notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      text={note.text}
      date={note.date}
      handleDelete={handleDelete}
    />
  ));

  //pass notes into storage
  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      notesF(items);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(notes));
  }, [notes]);

  // Colorr properties

  const [colorr, colorrF] = React.useState(true);

  function hanclick(params) {
    colorrF((prevState) => !prevState);
  }

  const style = {
    backgroundColor: colorr ? "aliceblue" : "rgb(34, 38, 44)",
  };

  const navstyle = {
    backgroundColor: colorr ? "blue" : "rgb(34, 38, 44)",
    boxShadow: colorr ? "0px 1px 1px  #aaa" : "0px 1px 1px  #aaa",
  };

  //pass color into storage
  React.useEffect(() => {
    const color = JSON.parse(localStorage.getItem("color"));

    colorrF(color);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("color", JSON.stringify(colorr));
  }, [colorr]);

  const [input, inputF] = React.useState("");
  const TotalWords = 200;
  function onChange(e) {
    if (TotalWords - e.target.value.length >= 0) {
      inputF(e.target.value);
    }
  }

  //   delete notes
  function handleDelete(id) {
    dispatch({ type: "DELETE" });
    const Delete = notes.filter((note) => note.id !== id);

    notesF(Delete);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        notes,
        notesF,
        input,
        TotalWords,
        onChange,
        handleClick,
        NoteElements,
        handleDelete,

        colorr,
        hanclick,
        style,
        navstyle,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
