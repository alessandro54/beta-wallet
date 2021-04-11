import React, {useContext, useState} from "react";
import {AlertContext} from "../context/AlertProvider";
import type {Alert as AlertType} from "../types/alert";

const Alert: React.FC<AlertType> = ({id,type, message}) => {
  const [isHovered, setIsHovered] = useState(false )
  const [state, dispatch] = useContext(AlertContext)
  let styles = ""
  switch (type) {
    case "success":
      styles = "bg-green-200";break;
    case "warn":
      styles = "bg-yellow-200";break;
    case "danger":
      styles = "bg-red-200";break;
  }
  return(
    <div className={`${styles} w-4/5 xl:w-1/5 text-center py-1 px-2 my-2 relative rounded transition pointer-events-auto`}
         onClick={() => dispatch({type:"remove/alert", payload : id})}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-md xl:text-xl">{message}</h1>
      {
        isHovered ? (
          <div className="w-full h-full absolute top-0 left-0 text-3xl cursor-pointer"
               style={{backdropFilter :"blur(8px"}}
          >
            &times;
          </div>) : null
      }
    </div>
  )
}

const Alerts: React.FC<{alerts:Array<AlertType>}> = ({alerts}) => {
  if (alerts) {
    return (
      <div className="fixed top-20 w-screen flex flex-col justify-center items-center pointer-events-none">
        {
          alerts.map(({id,type,message},index) => <Alert key={index} id ={id} type ={type} message={message}/>)
        }
      </div>
    )
  } else
    return null
}

export default Alerts