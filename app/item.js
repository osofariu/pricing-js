/**
 * Created by ovi on 9/17/16.
 */

class Item {
    constructor(price, tax_rate) {
        this.price = price
        this.taxRate = tax_rate
    }
    itemPrice() {
        return this.price
    }

    discountedTaxedPrice(discount) {
        let discountedPrice = this.price - (this.price * discount)
        return discountedPrice + (this.taxRate * discountedPrice)
    }
}

class Food extends Item {
    constructor(price) {
        super(price, 0)
    }
}

class Other extends Item {
    constructor(price) {
        super(price, 0.075)
    }
}

class Alcohol extends Item {
    constructor(price) {
        super(price, 0.085)
    }
}

module.exports = { Item, Food, Other, Alcohol}
