class Hamburger {

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static SIZE_SMALL = {
        price: 50,
        calories: 20,
    }

    static SIZE_BIG = {
        price: 100,
        calories: 40,
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20,
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5,
    }

    static STUFFING_POTATOES = {
        price: 15,
        calories: 10,
    }

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0,
    }

    static TOPPING_MAYO = {
        price: 20,
        calories: 5,
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculate() {

        let totalCalories = this.size.calories + this.stuffing.calories;

        for (const topping of this.toppings) {
            totalCalories += topping.calories;
        }

        return totalCalories;
    }

    calculatePrice() {

        let totalPrice = this.size.price + this.stuffing.price;

        for(const topping of this.toppings) {
            totalPrice += topping.price;
        }

        return totalPrice;
    }

}


// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate()  + ' cal');

// скільки коштує
console.log("Price: " + hamburger.calculatePrice() + ' tugrik');

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Calories: " + hamburger.calculate()  + ' cal');

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice() + ' tugrik');