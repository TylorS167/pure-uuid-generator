import { Test, describe, given, it } from '@typed/test'

import { createWithSeed } from './createWithSeed'
import { eq } from '@briancavalier/assert'
import { next } from './next'

export const test: Test =
  describe(next.name,
    given(`a UuidGenerator`,
      it(`returns { value: string, nextGenerator: UuidGenerator }`, () => {
        const seed = createWithSeed(100)

        const { value, nextGenerator } = next(seed)

        eq('e0c80075-2031-4b86-9939-3872004c0000', value)

        const { value: nextValue } = next(nextGenerator)

        eq('0049a0ac-e10f-44a1-a001-f80200150000', nextValue)
      }),
    ),
  )
