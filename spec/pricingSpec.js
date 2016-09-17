require('jasmine')

describe("Given a shopping list", function () {

    let list = require("../app/shopping-cart.js")
    let shoppingList

    describe("And there's no applicable tax for any item in the cart", function () {

        describe("and the price is not discounted", function () {
            let item = require("../app/item.js")

            it("the cost is the price of the one item in the list", function () {
                shoppingList = new list(new item.Food(100))
                expect(shoppingList.cost()).toBe(100)
            })

            it("the cost is the sum of the price of all items in the list", function () {
                shoppingList = new list(new item.Food(100), new item.Food(200))
                expect(shoppingList.cost()).toBe(300)
            })
        })
    })
})