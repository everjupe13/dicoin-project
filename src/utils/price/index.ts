export function formatPrice(cost?: string | number) {
  return cost === undefined ? '' : `${cost} ₽`
}
