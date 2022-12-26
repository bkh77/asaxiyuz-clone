const CURRENCY_FORMATTER = Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'UZS',
  maximumFractionDigits: 0,
})

export function currencyFormat(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
