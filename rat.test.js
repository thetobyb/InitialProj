const { expect } = require('@jest/globals')
const index = require('./index')

const Rat = index.Rat

const Jeff = new Rat('Jeff', 40, 40, 40, 40)

test('That the Rats strength and rest increases rested 82/72 str 55/60', () => {

    Jeff.train()
    expect(Jeff.leap).toBe(45)
    expect(Jeff.rested).toBe(30)
    
})

test('Test if Goat dies if hunger falls below zero', () => {

    Jeff.hunger = -50;
    Jeff.ratDie()
    expect(Jeff.alive).toBe(false);
    
})

test('Test if Rat dies if hunger goes above 100', () => {

    Jeff.hunger = 150;
    Jeff.ratDie()
    expect(Jeff.alive).toBe(false);
    
})

