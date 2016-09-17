require('jasmine')

describe("Given a shopping list of items, each having a different price", function () {

    let ShoppingList = require("../app/shopping-cart.js")
    let item = require("../app/item.js")
    let shoppingList

    describe("And the total price of all items is less than $100 (so, no discount)", function () {

        describe("When every item is Food, there's no applicable sales tax)", function () {
            it("adds up the price of every item to determine the cost", function () {
                let firstItem = new item.Food(100)
                let secondItem = new item.Food(9899)
                shoppingList = new ShoppingList(firstItem, secondItem)
                expect(shoppingList.cost()).toBe(9999)
            })

        })

        describe("When the shopping list includes items that are taxed", function () {
            it("applies tax to taxable items, according to their tax rate, and adds that to the total cost", function () {
                shoppingList = new ShoppingList(new item.Food(100), new item.Other(1000), new item.Alcohol(1000))
                expect(shoppingList.cost()).toBe(2260)
            })
        })
    })
})