const { expect } = require('@jest/globals')
const index = require('./index')

const Lion = index.Lion
const ron = index.ron



test('That the lions strength and rest increases rested 82/72 str 55/60 jump 75/85', () => {

    ron.train()
    expect(ron.str).toBe(60)
    expect(ron.rested).toBe(72)
    expect(ron.jump).toBe(85)
    
})

test('That the lions rest decreases by another 10 72/62, and bitestrength goes up 1 35/37', () => {

    
    ron.eat()
    expect(ron.rested).toBe(62)
    expect(ron.biteStr).toBe(37)

})

test('That the lions sleep goes to 100', () => {

    ron.sleep()
    expect(ron.rested).toBe(100)

    

})

test('Test if Goat dies if hunger falls below zero', () => {

    ron.hunger = -50;
    ron.lionDie()
    expect(ron.alive).toBe(false);
    
})

test('Test if Lion dies when eating too much', () => {

    ron.hunger = 150;
    ron.lionDie()
    expect(ron.alive).toBe(false);
    
})


