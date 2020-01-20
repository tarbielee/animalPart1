"use strict";

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        return "sound";
    }
    eats() {
        return this.name + " eats";
    }
}

class Cat extends Animal {
    sound() {
        return "Cat meows";
    }
}

class Dog extends Animal {
    sound() {
        return "Dog barks";
    }
}
class Home {
    constructor() {
        this.petArray = [];
       
    }
    adoptPet(pet) {
        this.petArray.push(pet);
    }
    makeAllSounds() {
        for (var i = 0; i < this.petArray.length; i++) {
            console.log(this.petArray[i].sound())   
        }
    }
}

let cat = new Cat("Stormy");
let dog = new Dog("Rax");
let dog1 = new Dog("Lethabo");
let dog2 = new Dog("Kurt");
let home = new Home();

home.makeAllSounds()
home.adoptPet(dog1)
home.makeAllSounds()
home.adoptPet(cat)
home.makeAllSounds()
home.adoptPet(dog2)
home.makeAllSounds()




