const { TestWatcher } = require('@jest/core')
const { expect } = require('@jest/globals')
const index = require('./index')

const Goat = index.Goat
const Doe = index.Doe


test('That Mike name is correct', () => {


    expect(Mike.name).toBe('Mike')
    
})

test('Checking all training values', () => {

    const Mike = new Goat('Mike', 20, 70, 20, 20, 20)

    Mike.train()

    expect(Mike.runSpeed).toBe(75)
    expect(Mike.agility).toBe(25)
    expect(Mike.rested).toBe(5)
    expect(Mike.hunger).toBe(10)
    

    

})