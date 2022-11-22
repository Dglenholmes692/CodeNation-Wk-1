const pet = {
    petName: "Martin",
    age: 4,
    colour: "Brown",
    Breed: "Unknown",
    petFeatures: ["running", "sleeping"],
    eating: "Salmon",
    drinking: "Mineral Water",
    eatingOrDrinking(){
        console.log(`Your pet is ${this.eating} and is drinking${this.drinking}`)
    }
}
console.log(`My pet's name is ${pet.petName}, they are ${pet.age} years old and the colour is ${pet.colour} however the breed is ${pet.breed}`)
person.homeOwner = true;
    console.log(person.homeOwner)
pet.colour = "red";
    console.log(pet.colour)



///////////////////////////////
// let day = "Saturday"
// const person = {
//     firstName: "Dylan",
//     lastName: "Glenholmes",
//     age: 21,
//     Occupation: "Software Engineer",
//     married: false,
//     homeOwner: false,
//     hobbies: ["astronomy", "low-level programming", "football"],
//     marketingOp() {
//         if (this.homeOwner == false && this.age > 25) {
//             return "send mortage after email"
//         } else if (this.homeOwner == false && this.age < 25) {
//             return "send summer holiday cc offer"
//         } else if (this.homeOwner == true && this.age > 25) {
//             return "Pension investment offer"
//         } else {
//             return "Send sensible savings offers"
//         }
//     }
// }

// console.log(person.marketingOp());
