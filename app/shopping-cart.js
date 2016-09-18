class ShoppingList {
    constructor(...items) {
        this.items = items
    }

    cost() {
        let discountToApply = discountPercentage(this.items.map(item => item.itemPrice()).reduce((acc, x) => acc + x, 0))
        return this.items.map(item => item.discountedTaxedPrice(discountToApply)).reduce((acc, x) => acc + x, 0)
    }
}

function discountPercentage(rawPrice) {
    if (rawPrice >= 100000) {
        return .15
    } else if (rawPrice >= 10000) {
        return .1
    } else {
        return 0
    }
}

module.exports = ShoppingList