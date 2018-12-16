import { parseArgs, looseEqual, remove, merge } from '../../src/util'

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

  it('does not compare objects with arrays', () => {
    assert(looseEqual({ 0: 0 }, [0]) === false)
  })

  it('does not compare primitives with objects', () => {
    assert(looseEqual('a', Object('a')) === false)
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

describe('merge', () => {
  it('ignores nulls', () => {
    const obj = {
      test: 'test'
    }

    const newObj = merge(obj, null)

    assert(Object.keys(obj).length === Object.keys(newObj).length)
    assert(obj.test === newObj.test)
  })
})
