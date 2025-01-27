import React, { useRef, useEffect } from 'react';

import {
  popupOverlay,
  popupContainer,
  popupContent,
  popupButton,
  popupButtonDanger,
} from './Popup.css';

type DialogProps = {
  title: string;
  message: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const Popup: React.FC<DialogProps> = ({
                                        title,
                                        message,
                                        isOpen,
                                        onConfirm,
                                        onCancel,
                                      }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;

    // Check if the clicked element is the dialog itself (backdrop area)
    if (dialog && event.target === dialog) {
      onCancel();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={popupOverlay}
      onCancel={onCancel}
      onClick={handleBackdropClick}
    >
      <div className={popupContainer}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={popupContent}>
          <button className={popupButton} onClick={onConfirm}>
            Yes
          </button>
          <button className={popupButtonDanger} onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;
