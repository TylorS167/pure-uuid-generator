import { UuidGenerator } from './UuidGenerator'
import { createWithSeed } from './createWithSeed'

const toString = (num: number) => num.toString(16)

export function next(uuid: UuidGenerator): { value: string, nextGenerator: UuidGenerator } {
  const [ timeLow, timeMid, timeHi, clockSeqHi, clockSeqLow, node ] = uuid.seeds()

  const value: string =
    paddedString(toString(timeLow), 8) + '-' +
    paddedString(toString(timeMid), 4) + '-' +
    paddedString(toString(timeHi), 4) + '-' +
    paddedString(toString(clockSeqHi), 2) + paddedString(toString(clockSeqLow), 2) + '-' +
    paddedString(toString(node), 12)

  const nextGenerator = createWithSeed(node)

  return { value, nextGenerator }
}

function paddedString(str: string, length: number) {
  let z = '0'

  for (let i = length - str.length; i > 0; i >>>= 1, z += z) {
    if (i & 1)
      str = z + str
  }

  return str
}
