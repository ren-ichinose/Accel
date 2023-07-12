export default function formatToJPY(price: number): string {
  if (!price) return ''
  const formatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  })
  return formatter.format(price)
}
