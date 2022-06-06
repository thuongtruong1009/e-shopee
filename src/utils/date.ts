export const handleDate = (date: string) => {
  const result = new Date(date)
  return `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
}
