const { TestWatcher } = require('@jest/core')
const { expect } = require('@jest/globals')
const index = require('./index')

const Goat = index.Goat
const Doe = index.Doe

const Mike = new Goat('Mike', 20, 70, 20, 20, 20)

test('That Mike name is correct', () => {


    expect(Mike.name).toBe('Mike')
    
})

test('Checking all training values', () => {

    

    Mike.train()

    expect(Mike.runSpeed).toBe(75)
    expect(Mike.agility).toBe(25)
    expect(Mike.rested).toBe(5)
    expect(Mike.hunger).toBe(10)
    

})

test('Test if Goat dies if hunger falls below zero', () => {

    Mike.hunger = -50;
    Mike.goatDie()
    expect(Mike.alive).toBe(false);
    
})

test('Test if Goat dies of bloating if hunger above 100', () => {

    Mike.hunger = 150;
    Mike.goatDie()
    expect(Mike.alive).toBe(false);
    
})

