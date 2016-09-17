/**
 * Created by ovi on 9/17/16.
 */

class Item {
    constructor(price) {
        this.price = price
    }
    price() {
        return this.price
    }
}

class Food extends Item {}

module.exports = { Item, Food}
