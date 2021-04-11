import {UserParams} from "../../types/user";

enum HTTP {
  get = "GET",
  patch = "PATCH",
  delete = "DELETE"
}
const httpRequester = async (method: HTTP, body : UserParams | {confirmation:String}) => {
  return (await fetch("/api/profile", {
    method: method,
    headers: {"Accept": "application/json", "Content-Type": "application/json"},
    body: JSON.stringify(body)
  })).json()
}
const updateUser = async (values :UserParams) => {
  try {
    return await httpRequester(HTTP.patch, values)
  } catch (error) {
    console.log(error)
  }
}
const deleteUser = async (confirmationString : String) => {
  try {
    return await httpRequester(HTTP.delete, {confirmation:confirmationString})
  } catch (error) {
    console.log(error)
  }
}

export {updateUser, deleteUser}