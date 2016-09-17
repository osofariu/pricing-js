/**
 * Created by ovi on 9/17/16.
 */

class Item {
    constructor(_price, tax_rate) {
        this.itemPrice = _price
        this.taxRate = tax_rate
    }
    price() {
        return this.itemPrice
    }

    tax() {
        return this.taxRate * this.itemPrice / 100
    }
}

class Food extends Item {
    constructor(price) {
        super(price, 0)
    }
}

class Other extends Item {
    constructor(price) {
        super(price, 7.5)
    }
}


class Alcohol extends Item {
    constructor(price) {
        super(price, 8.5)
    }
}

module.exports = { Item, Food, Other, Alcohol}
