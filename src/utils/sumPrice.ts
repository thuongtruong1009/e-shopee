export const sumPrice = (array: any, price: any) => {
  let sum = 0
  for (let i = 0; i < array.length; i++)
    sum += price
  return sum
}
