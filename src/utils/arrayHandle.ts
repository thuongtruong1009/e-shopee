const removeItemByIndex = (array: Array<any>, item: any, length: number) => {
  const index = array.indexOf(item)
  if (index > -1)
    array.splice(index, length)

  return array
}
const equalArray = (array1: Array<number>, array2: Array<number>) => JSON.stringify(array1) === JSON.stringify(array2)

export { removeItemByIndex, equalArray }
