## Pricing kata

###A store has the following pricing policy:

* Buy less than $100 worth of merchandise and pay the full price.
* Buy $100 or more, but less than $1000, and get 10% off.
* Buy $1000 or more, and get 15% off.

###According to the laws governing the store, the following taxes apply:

* Food: no tax.
* Alcohol: 7.5% sales tax + 8% "sin" tax.
* All other merchandise: 7.5% sales tax.

Discounts are calculated on sticker prices; taxes are calculated on discounted prices.

Using TDD, write a method that will accept purchased items of food, alcohol,
and other, and will return the price the customer should be charged.

