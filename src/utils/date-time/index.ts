export function plusZero(numberOutZero: number) {
  if (numberOutZero < 10) {
    const numberWhitnZero = '0' + numberOutZero
    return numberWhitnZero
  }
  return String(numberOutZero)
}

export function formadDate(dateString: string) {
  const date = new Date(dateString)
  return `${plusZero(date.getDay() + 1)}-${plusZero(
    date.getMonth() + 1
  )}-${date.getFullYear()} ${plusZero(date.getHours())}:${plusZero(
    date.getMinutes()
  )}`
}
