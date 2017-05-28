import { createWithSeed, next } from 'pure-number-generator'

export function getRandomInteger(seed: number, min: number, max: number): number {
  const generator = createWithSeed(seed)

  const { value } = next(generator)

  return Math.floor(value * (max - min + 1)) + min
}
