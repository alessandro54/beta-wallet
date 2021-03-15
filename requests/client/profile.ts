const httpRequester = async (method, body) => {
  return (await fetch("/api/profile", {
    method: method,
    headers: {"Accept": "application/json", "Content-Type": "application/json"},
    body: JSON.stringify(body)
  })).json()
}
const updateUser = async (values) => {
  try {
    return await httpRequester("PATCH", values)
  } catch (e) {
    console.log(e)
  }
}
const deleteUser = async (confirmationString) => {
  try {
    return await httpRequester("DELETE", {confirmation:confirmationString})
  } catch (e) {
    console.log(e)
  }
}

export {updateUser, deleteUser}