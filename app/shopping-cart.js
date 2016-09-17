class ShoppingList {
    constructor(...items) {
        this.items = items
    }

    cost() {
        let sumPrices = 0
        for (let i = 0; i < this.items.length; i++) {
            sumPrices += this.items[i].price
        }
        return sumPrices
    }
}

module.exports = ShoppingList