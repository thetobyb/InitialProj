const { TestWatcher } = require('@jest/core')
const { expect } = require('@jest/globals')
const index = require('./index')

const Lion = index.Lion
const ron = index.ron
const Goat = index.Goat
const Doe = index.Doe


test('Checking all training values', () => {

    const Mike = new Goat('Mike', 20, 70, 20, 20, 20)

    Mike.train()

    expect(Mike.runSpeed).toBe(75)
    expect(Mike.agility).toBe(25)
    expect(Mike.rested).toBe(5)
    expect(Mike.hunger).toBe(10)
    expect(Mike.name).toBe('Mike')

    

})