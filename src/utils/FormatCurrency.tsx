const formatter = Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
})


export default function FormatCurrency(price: number) {
  return formatter.format(price);
}