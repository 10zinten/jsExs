function Rabbit(adjective) {   //Customised Constructor( Class Concept in C++ and python)
    this.adjective = adjective; // property and value( inplicite or explicite)
    this.describeMyself = function() {  // methode 
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits with customized constructor
var rabbit1 = new Rabbit("fluffy"); // Create object 'rabbit1' using Rabbit constructor with passing argument
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

console.log(rabbit1.describeMyself()); // calling object method
console.log(rabbit2.describeMyself());
console.log(rabbit3.describeMyself());

// Array of Object 
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6);
for(var i = 0; i < family.length; i++) {
    console.log(family[i].name);  
    console.log(family[i].age);;    
}
