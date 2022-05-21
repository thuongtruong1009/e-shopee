export const sumPrice = (array: any, price: number, quantity: number) => {
  let sum = 0
  for (let i = 0; i < array.length; i++)
    sum = sum + (price * quantity)
  return sum
}
