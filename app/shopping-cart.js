class ShoppingList {
    constructor(...items) {
        this.items = items
    }

    cost() {
        return this.items.map( item => {
            return item.price() + item.tax()
        }).reduce((a, b) => a + b, 0);
    }
}

module.exports = ShoppingList