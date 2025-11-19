import React from "react";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-modal"
            onClick={onClose}
        >
            {/* Overlay */}
            <div className="absolute inset-0 backdrop-blur-md"></div>

            <div className="z-modal" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
