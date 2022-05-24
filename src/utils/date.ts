export const handleDate = (date: string) => {
  const result = new Date(date)
  return `${result.getUTCDate()}/${result.getUTCMonth()}/${result.getUTCFullYear()}`
}
