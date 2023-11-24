import React  from 'react';
import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Container>
          <div className="modal-content">
            <div className="custom-content">
            <button className="close-button" onClick={onClose}>
            <IoMdClose />
            </button>
                {children}
            </div>
          </div>
        </Container>
      );
};