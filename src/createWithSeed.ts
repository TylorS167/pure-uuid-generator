import { UuidGenerator } from './UuidGenerator'
import { getRandomInteger } from './getRandomInteger'

const LIMIT_UI48 = 281474976710656
const LIMIT_UI32 = 4294967296
const LIMIT_UI16 = 65536
const LIMIT_UI12 = 4096
const LIMIT_UI08 = 256
const LIMIT_UI06 = 64

export function createWithSeed(seed: number): UuidGenerator {
  const timeLow = getRandomInteger(seed, 0, LIMIT_UI32 - 1)
  const timeMid = getRandomInteger(timeLow, 0, LIMIT_UI16 - 1)
  const timeHi = 0x4000 | getRandomInteger(timeMid, 0, LIMIT_UI12 - 1)
  const clockSeqHi = 0x80 | getRandomInteger(timeHi, 0, LIMIT_UI06 - 1)
  const clockSeqLow = getRandomInteger(clockSeqHi, 0, LIMIT_UI08 - 1)
  const node = getRandomInteger(clockSeqLow, 0, LIMIT_UI48 - 1)

  return new UuidGenerator(timeLow, timeMid, timeHi, clockSeqHi, clockSeqLow, node)
}
