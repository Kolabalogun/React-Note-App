import React from "react";

const Note = ({ id, text, date, handleDelete }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="notefoot">
        <span>{date}</span>
        <button onClick={() => handleDelete(id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
