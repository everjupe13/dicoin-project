export function utilGetFormattedPrice(cost?: string | number) {
  return cost === undefined ? '' : `${cost} ₽`
}
