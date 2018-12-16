import { parseArgs, looseEqual, remove } from '../../src/util'

describe('parseArgs', () => {
  it('warns on wrong arguments', () => {
    const spy = sinon.spy(console, 'warn')

    parseArgs({}, null)

    assert(spy.notCalled === false)
    assert(spy.callCount === 1)

    spy.restore()
  })
})

describe('looseEqual', () => {
  it('can return false', () => {
    assert(looseEqual(2, 0) === false)
  })
})

describe('remove', () => {
  it('does not fail for empty arrays', () => {
    let exceptions = 0

    try {
      remove([], null)
    } catch (e) {
      exceptions++
    }

    assert(exceptions === 0)
  })

  it('does not fail if item was not found', () => {
    let exceptions = 0

    try {
      remove(['not-null'], null)
    } catch (e) {
      exceptions++
    }

    assert(exceptions === 0)
  })
})
