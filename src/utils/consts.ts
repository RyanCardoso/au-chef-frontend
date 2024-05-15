export const isNight = () => {
  const date = new Date().getHours() >= 18 || new Date().getHours() < 6
  return date ? 'noturno' : 'diurno'
}

export const replaceSpaces = (text: string) => text.replace(/\s+/g, '-')

export const priceInAmericanFormat = (price: string): number => {
  let formatted = price.replace(/[R$\s]/g, '')

  formatted = formatted.replace(/\./g, '')
  formatted = formatted.replace(',', '.')

  return Number(formatted)
}
