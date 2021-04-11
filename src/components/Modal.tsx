import React from "react"
interface ModalProps {
    children:React.FC;
    visibility: boolean;
    handleExit:()=>void;
}
const Modal: React.FC<ModalProps> = ({children,visibility, handleExit}) => {
    return (
        <div className={`${visibility ? "flex" : "hidden"} fixed justify-center items-center bottom-0 w-screen h-main z-20 bg-black bg-opacity-50`}
             onClick={() => handleExit()}
             style={{backdropFilter:"blur(10px)"}}>
            {children}
        </div>
    )
}

export default Modal