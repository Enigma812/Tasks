export function p(n: number): number {
  let sum = 0;
  for (let i = 1, sign = 1; i <= n; i = i + 2, sign = -sign) {
    const k: number = sign * (1 / i);
    sum = sum + k;
  }
  return sum * 4;
}
