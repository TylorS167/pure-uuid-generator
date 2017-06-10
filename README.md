# Pure UUID Generator

[![Greenkeeper badge](https://badges.greenkeeper.io/TylorS167/pure-uuid-generator.svg)](https://greenkeeper.io/)

## Get it

```sh
yarn add --dev pure-uuid-generator
# or
npm install --save-dev pure-uuid-generator
```

## API

##### `createWithSeed(seed: number): UuidGenerator`

Given a seed value returns a psuedo-random UUID generator.

```typescript
import { next, createWithSeed } from 'pure-uuid-generator'

const generator = createWithSeed(100)

const { value, nextGenerator } = next(generator)
```

##### `next(generator: UuidGenerator): { value: string, nextGenerator: UuidGenerator }

Given a generator it returns a psuedo-random `value` and the `nextGenerator` to
allow creating other psuedo-random values.

```typescript
import { next, createWithSeed } from 'pure-uuid-generator'

const generator = createWithSeed(100)

const { value, nextGenerator } = next(generator)
```