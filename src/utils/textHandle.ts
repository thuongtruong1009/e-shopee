export const sliceText = (string: string) => {
  const newStr = string.split(' ')
  const slice = newStr.slice(0, 10)
  return slice.join(' ')
}
