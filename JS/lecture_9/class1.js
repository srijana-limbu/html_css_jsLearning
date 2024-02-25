class Person {
    constructor(name) {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Devloper extends Person {
    constructor(name) {
        console.log("enter child constructor");

        super(name); //to invoked parent class constructor 
        this.branch = this.branch;

        console.log("exit child constructor");

    }

    work() {
        super.eat();
        console.log("solve problems, build somethings");     
    }
}

let devObj = new Devloper("srijana");

/* devObj
Devloper {species: 'homo sapiens', branch: undefined}
branch: undefined
species: "homo sapiens"
[[Prototype]]: Person */

/* enter child constructor
 enter parent constructor
 exit child constructor */

 /* devObj
Devloper {species: 'homo sapiens', name: 'srijana', branch: undefined}
branch: undefined
name: "srijana"
species: "homo sapiens"
[[Prototype]]: Person */