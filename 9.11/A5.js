let Topping = "Peppers"
let Topping2= "mushrooms"

switch(Topping){
    case "Cheese":
    case "Ham":
    case "Chicken":
    case "Pepperoni":
        console.log("These are important ingredients for my pizza!");
        break
    default:
        console.log(`I dont mind having ${Topping} however I refuse to have ${Topping2} on my pizza`)
}