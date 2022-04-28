const prev = (element) => {
  const topListContainer = document.getElementById(element)
  topListContainer.scrollLeft -= topListContainer.offsetWidth
}
const next = (element) => {
  const topListContainer = document.getElementById(element)
  topListContainer.scrollLeft += topListContainer.offsetWidth
}

export { prev, next }
