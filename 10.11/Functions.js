// const holidayDestination = (month, country) => {
//     console.log(`Yay! I'm going on holiday in ${month} and im going to ${country}`);
// }

// holidayDestination("June", "Jamaca");


// const sayHello = (myName, drink) =>{
//     console.log(`Hi, there ${myName} how are you? Would you like a ${drink}`)
// }

// sayHello("Dylan", "Fanta");

// const inventory = (productCode, departmentName, quantity) => {
//     console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
// };

// inventory (412345, "Baked Goods", 65);


// const multiply = (num1, num2) =>{
//     return num1 * num2
// }

// console.log(multiply (2,5));

const replenishStock = (productCode) =>{
console.log(`order product number is ${productCode} stock is low!`)
}
const reducePrice = (productCode, originalPrice) =>{
    let salePrice = originalPrice /=2
    console.log(`Product number ${productCode} is now £${salePrice}`)
}
const checkStock = (productCode, quantity, originalPrice) => {
    if(quantity <= 10){
        replenishStock(productCode)
    } else if( quantity > 100){
        reducePrice(productCode, originalPrice)
    }else{
        console.log("Don't order stock")
    }
}
checkStock(345678, 200 , 100);

