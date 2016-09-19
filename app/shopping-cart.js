class ShoppingCart {
    constructor(...items) {
        this.items = items
    }

    cost() {
        let discountToApply = discountPercentage(sumOfItemPrices(this.items))
        return sumOfTaxedPricesGivenDiscount(this.items, discountToApply)
    }
}

function sumOfItemPrices(items) {
    return items.map(item => item.price).sum()
}

function sumOfTaxedPricesGivenDiscount(items, discount) {
    return items.map(item => item.taxedPriceGivenDiscount(discount)).sum()
}

Array.prototype.sum = function() {
    return this.reduce((acc, x) => acc + x, 0)
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

module.exports = ShoppingCart