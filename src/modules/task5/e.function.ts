import { factorial } from '../task1/factorial.function';

export function e(n: number): number {
  let sum = 0;
  for(let i = 0; i <= n; i = i + 1) {
    const k = 1 / factorial(i);
    sum = sum + k;
  }
  return sum;
}
