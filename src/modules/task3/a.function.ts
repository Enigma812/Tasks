import { factorial } from '../task1/factorial.function';

export function a(n: number, k: number): number {
  return factorial(n) / factorial(n - k);
}
