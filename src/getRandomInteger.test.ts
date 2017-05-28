import { Test, describe, given, it } from '@typed/test'

import { eq } from '@briancavalier/assert'
import { getRandomInteger } from './getRandomInteger'

export const test: Test =
  describe(getRandomInteger.name,
    given(`a seed, a minimum number, and max number`,
      it(`returns a random integer between the minimum and maximum number`, () => {
        eq(88, getRandomInteger(100, 0, 100))
        eq(878, getRandomInteger(100, 0, 1000))
      }),
    ),
  )
