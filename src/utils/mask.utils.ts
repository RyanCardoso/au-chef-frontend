export const maskPrice = (price: string | number, isStyle = true) => {
  let formattedPrice

  if (typeof price === 'string') {
    formattedPrice = price.replace(/\D/g, '')
    formattedPrice = Number(formattedPrice) / 100
  } else {
    formattedPrice = price
  }

  if (!isStyle) {
    return formattedPrice.toLocaleString('pt-BR', {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
  }

  formattedPrice = formattedPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedPrice
}

export const maskPercentage = (percentage: string | number) => {
  let formattedPercentage

  if (typeof percentage === 'string') {
    formattedPercentage = percentage.replace(/\D/g, '')
    formattedPercentage = Number(formattedPercentage) / 100
  } else {
    formattedPercentage = percentage / 100
  }

  return formattedPercentage.toLocaleString('pt-BR', {
    style: 'percent',
  })
}
