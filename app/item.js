class Item {
    constructor(price, tax_rate) {
        this.itemPrice = price
        this.taxRate = tax_rate
    }
    get price() {
        return this.itemPrice
    }

    taxedPriceGivenDiscount(discount) {
        let discountedPrice = this.itemPrice - (this.itemPrice * discount)
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

module.exports = {Item, Food, Other, Alcohol}
