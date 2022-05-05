const removeItemByIndex = (array: Array<any>, item: any, length: number) => {
  const index = array.indexOf(item)
  if (index > -1)
    array.splice(index, length)

  return array
}

export { removeItemByIndex }
