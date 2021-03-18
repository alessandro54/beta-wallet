const fetchWallets = async () => {
  try {
    return (await fetch('/api/wallet')).json()
  } catch (error) {
    console.log(error)
  }
}

export { fetchWallets}