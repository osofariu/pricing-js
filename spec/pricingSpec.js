require('jasmine')

describe("Given a shopping cart", function () {

    let ShoppingCart = require("../app/shopping-cart.js")
    let Item = require("../app/item.js")

    let shoppingCart = []
    describe("And the total itemPrice of all items is less than $100 (so, no discount)", function () {

        describe("When every item is Food, there's no applicable sales tax", function () {

            it("adds up the price of every item to determine the cost", function () {
                shoppingCart = new ShoppingCart(new Item.Food(100), new Item.Food(9899))
                expect(shoppingCart.cost()).toBe(9999)
            })

        })

        describe("When the shopping cart includes items that are taxed", function () {

            it("applies tax to items - according to their tax rate - and adds that tax to the total cost", function () {
                shoppingCart = new ShoppingCart(new Item.Food(100), new Item.Other(1000), new Item.Alcohol(1000))
                expect(shoppingCart.cost()).toBe(2260)
            })
        })
    })

    describe("But when the total itemPrice of all items is at least $100", function() {

        describe("And all items in the cart are of type Food, it applies a discount (but no tax)", function () {

            it("But it applies 10% discount when the total is $100", function () {
                shoppingCart = new ShoppingCart(new Item.Food(100), new Item.Food(9900))
                expect(shoppingCart.cost()).toBe(9000)
            })

            it("But it applies 15% discount when the total is $1000", function () {
                shoppingCart = new ShoppingCart(new Item.Food(1000), new Item.Food(99000))
                expect(shoppingCart.cost()).toBe(85000)
            })
        })

        describe("And when the cart includes items taxed as Alcohol and Other", function () {

            it("Applies 10% discount when pre-tax total is greater than $100, but less than $1000, then applies applicable tax", function () {
                shoppingCart = new ShoppingCart(new Item.Food(10000), new Item.Other(10000))
                expect(shoppingCart.cost()).toBe(9000 + (9000 + 0.075 * 9000))
            })
            
            it("Applies 15% discount when pre-tax total is greater than $100, but less than $1000, then applies applicable tax", function () {
                shoppingCart = new ShoppingCart(new Item.Food(100000), new Item.Alcohol(100000))
                expect(shoppingCart.cost()).toBe(85000 + (85000 + 0.085 * 85000))
            })
        })
    })
})