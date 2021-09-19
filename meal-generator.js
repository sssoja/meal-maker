const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "soup", 5.99);
menu.addDishToCourse("mains", "chicken", 7.99);
menu.addDishToCourse("desserts", "creme brulee", 4.99);
menu.addDishToCourse("appetizers", "salad", 3.99);
menu.addDishToCourse("mains", "veal", 12.99);
menu.addDishToCourse("desserts", "ice cream", 4.99);

const meal = menu.generateRandomMeal();

console.log(meal);
