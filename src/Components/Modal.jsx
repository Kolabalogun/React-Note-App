import React from "react";
import { useGContext } from "./Context";

const Modal = ({ closeModal }) => {
  const { modalContent } = useGContext();

  React.useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });

  return (
    <div className="moal">
      <div className="modal">{modalContent}</div>
    </div>
  );
};

export default Modal;
