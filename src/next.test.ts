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

        eq('e0c80075-2031-4b86-9a31-786200440000', value)

        const { value: nextValue } = next(nextGenerator)

        eq('0041e09c-e177-40ae-84e1-f9c200ee0000', nextValue)
      }),
    ),
  )
