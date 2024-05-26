export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-br', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}