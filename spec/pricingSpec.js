require('jasmine')

describe("Given a shopping list of items, each having a different price", function () {

    let list = require("../app/shopping-cart.js")
    let shoppingList

    describe("And there's no applicable tax for any item in the cart (it's Food)", function () {

        describe("and the total price of all items is less than $100", function () {
            let item = require("../app/item.js")

            it("the cost is the price of the one item in the list", function () {
                shoppingList = new list(new item.Food(100))
                expect(shoppingList.cost()).toBe(100)
            })

            it("the cost is the sum of the price of all (Food) items in the list", function () {
                shoppingList = new list(new item.Food(100), new item.Food(9899))
                expect(shoppingList.cost()).toBe(9999)
            })

        })
    })
})