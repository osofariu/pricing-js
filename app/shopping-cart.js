class ShoppingList {
    constructor(...items) {
        this.items = items
    }

    cost() {
        let sumPrices = 0
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i]
            sumPrices += currentItem.price() + currentItem.tax()
        }
        return sumPrices
    }
}

module.exports = ShoppingList