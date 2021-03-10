
const requestMaker = async (method, body) => {
  const response = await fetch("/api/profile", {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  return response.json()
}
const updateUser = async (values) => {
  try {
    return await requestMaker("PATCH", values)
  } catch (e) {
    console.log(e)
  }
}
const deleteUser = async (confirmationString) => {
  try {
    return await requestMaker("DELETE", {confirmation:confirmationString})
  } catch (e) {
    console.log(e)
  }
}

export {updateUser, deleteUser}