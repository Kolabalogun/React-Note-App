import React from "react";

import { useGContext } from "./Context";
import Modal from "./Modal";

const Notelist = () => {
  const {
    input,
    TotalWords,
    onChange,
    handleClick,
    NoteElements,
    closeModal,
    modalContext,
    isModalOpen,
  } = useGContext();

  return (
    <div className="coon">
      {isModalOpen && (
        <Modal closeModal={closeModal} modalContext={modalContext} />
      )}
      <div className="notelist">
        <div className="input">
          <div className="note">
            <textarea
              onChange={onChange}
              cols="30"
              rows="8"
              value={input}
              placeholder="Input your Notes here..."
            ></textarea>
            <div className="notefoot">
              <span>{TotalWords - input.length} words remaining</span>
              <button onClick={handleClick}>Save</button>
            </div>
          </div>
        </div>
        {NoteElements}
      </div>
    </div>
  );
};

export default Notelist;
