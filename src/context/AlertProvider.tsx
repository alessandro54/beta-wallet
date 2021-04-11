import React, {useReducer} from "react"
import  type {Alert} from "../types/alert";
import { v4 as uuidv4 } from "uuid";

//State
type State = {
    alerts:Array<Alert>
}
const initialState: State = {
    alerts: [
        {id:uuidv4(), type:"success", message:"All good"},
        {id:uuidv4(), type:"success", message:"All good"},
        {id:uuidv4(), type: "danger", message: "There was an error"}
    ]
}
//Action
type Action = {
    type: string,
    payload: any
}
enum ActionType {
    queue = "queue/alert",
    dequeue = "dequeue/alert",
    remove = "remove/alert",
    clear = "clear/alert"
}

const AlertContext = React.createContext<[State, React.Dispatch<any>]>([initialState,() => {}])
const alertReducer = ({alerts}: State, {type, payload}: Action) => {
    switch (type) {
        case ActionType.queue:
            return {
                alerts: [...alerts, payload]
            }
        case ActionType.dequeue:
            const newAlerts = alerts
            newAlerts.splice(-1,1)
            return {
                alerts: newAlerts
            }
        case ActionType.remove:
            return {
                alerts: alerts.filter(
                  alert => alert.id !== payload
                )
            }
        case ActionType.clear:
            return {
                alerts: []
            }
        default:
            return {alerts}
    }
}

const AlertContextProvider: React.FC =  ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, initialState)
    return (
      <AlertContext.Provider value={[state, dispatch]}>
          {children}
      </AlertContext.Provider>
    )
}

export { AlertContext, AlertContextProvider}