function pizzaOven(crustType, sauceType, cheeses, toppings) {
    
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional","mozzarella", ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed","marinara",["mozzarella", " feta"], ["mushrooms", " olives", " onions"])
var p3 = pizzaOven("Brooklyn","white",["mozzarella", " feta", " monetary jack"],["mushrooms", " olives", " onions", " green peppers", " brocolli",])
var p4 = pizzaOven("thin","alfredo",["mozzarella", " feta"], ["onions", " chicken", " red peppers", " garlic", "sausage"])

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);


function randomPizza(crustType, sauceType, cheeses, toppings) {

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    
    return pizza;
    
}
var crustType = ["brooklyn", "thin", "hand tossed"]
var sauceType = ["alfredo", "traditional", "white", "bbq", "marinara"]
var cheeses = ["mozzarella", "feta", "gorgonzola", "goat"]
var toppings = ["peppers", "olives", "garlic", "chicken", "pepperoni", "sausage"]
var rdmcrust = crustType[Math.floor(Math.random()*crustType.length)];
var rdmsauce = sauceType[Math.floor(Math.random()*sauceType.length)];
var rdmchz = cheeses[Math.floor(Math.random()*cheeses.length)];
var rdmtops = toppings[Math.floor(Math.random()*toppings.length)];
console.log(randomPizza(rdmcrust, rdmsauce, rdmchz, rdmtops));

