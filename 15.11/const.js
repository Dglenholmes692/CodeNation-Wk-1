class pet{
    constructor(name, age, type, breed, colour, time){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFun = time;
    } feedPet(time){
        this.lastFun= time;
        return `Last feed time updated to: ${this.lastFun} for ${this.name}`;
    }
}

const Duke = new pet("Duke", 12, "dog", "LS", "WB", "00:00")
console.log(Duke.feedPet("18:00"));