export const APP_NAME = 'ONSIDE studio'

// export const urlQueryParamsToObject = params => {
//   const result = {}

//   for (const [key, value] of params.entries()) {
//     result[key] = value
//   }

//   return result
// }

export const appTitle = (title: string) => {
  return [title, APP_NAME].filter(Boolean).join(' — ')
}

// const _separateThousands = numberString => {
//   const withTrailingZeros = numberString.replaceAll(/\d(?=(\d{3})+\.)/g, '$& ')
//   return withTrailingZeros.replace(/\.00$/, '')
// }

// export const separateThousands = number => {
//   return number ? _separateThousands(number.toFixed(2)) : '0'
// }

// export const formatRuble = number => {
//   return `${separateThousands(number || 0)} ₽`
// }
