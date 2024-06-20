export function formatDenom(value: number, decimals: number) {
  return (value / 10 ** decimals).toFixed(3);
}
