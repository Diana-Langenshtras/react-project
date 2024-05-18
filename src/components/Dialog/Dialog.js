import React from "react";
//import { ReactComponent as IconClose } from "./icon-close.svg";
//import "./SimpleModal.css";
import Button from "../Button/Button";
import { Transition } from "react-transition-group";
import './Dialog.css';

export const Dialog = ({ card, isOpen, onClose, children }) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
      };
  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {(state) => (
          <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
              <div className="modal-content">
              <div className="card__dialog-wrapper">        
                    {children}
                    <Button className="card__dialog-button"  onClick={() => onClose()}>Создать</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Dialog;