import { Test, describe, given, it } from '@typed/test'

import { createWithSeed } from './createWithSeed'
import { eq } from '@briancavalier/assert'

export const test: Test =
  describe(createWithSeed.name,
    given(`a seed`,
      it(`returns a psuedo-random UuidGenerator`, () => {
        eq(createWithSeed(100).seeds(), createWithSeed(100).seeds())
      }),
    ),
  )
