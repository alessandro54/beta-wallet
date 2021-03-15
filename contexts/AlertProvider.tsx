import React, {useContext, useReducer, useState} from "react"
import { v4 as uuidv4 } from "uuid";
const AlertContext = React.createContext()

const initialState = [
    /*{id:uuidv4(), type:"success", message:"All good"},
    {id:uuidv4(), type:"success", message:"All good"},
    {id:uuidv4(), type: "danger", message: "There was an error"}*/
]

const reducer = ({alerts}, {type, payload}) => {
    switch (type) {
        case "ADD_ALERT":
            return {
                alerts: [...alerts, payload]
            }
        case "DELETE_ALERT":
            return {
                alerts: alerts.filter(
                  alert => alert.id !== payload
                )
            }
        case "POP":
            const newAlerts = alerts
            newAlerts.splice(-1,1)
            return {
                alerts: newAlerts
            }
    }
}

const init : any = (initialAlerts) => {
    return {
        alerts: initialAlerts
    }
}

const AlertContextProvider =  ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return(
      <AlertContext.Provider value={[state, dispatch]}>
          {children}
      </AlertContext.Provider>
    )
}

export { AlertContext, AlertContextProvider}