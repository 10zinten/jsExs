var friends = new Object(); // constructor to create object friends

// Objects into object
friends.bill = {            //Literal Notation to create object bill
     firstName : "Bill",
     lastName : "Gates",
     number : 5434-5454,
     address : ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName : "Steve", 
    lastName : "Jobs",
    number : 65665-13232,
    address : ['Two Apple way','Nike', 'CF', '23433']
};
    
friends.tenzin = {
    firstName : "Tenzin",
    lastName : "Maetok",
    number : 98822-04404,
    address : ['Bloomsoom Resort Road', 'Norbulinka', 'Dharamsala', 'k']
};

var list = function(para) {
    for(var key in friends) { //new style iteration of for loop  
        console.log(key);    
    }    
};

var search = function (name) {
    for(var obj in friends) {
        if( friends[obj].firstName === name) {
            console.log(friends[obj]);
            return friends[obj];
        }
    }    
};

//Array of objects 

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

// create array of objects
var contacts = [bob, mary]; 

// log full name of a person to the console
function printPerson(person) { 
    console.log(person.firstName + " " + person.lastName); 
}

// log full of all the person in array of the object
function list() {  
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function (lastName) {
      var contactsLength = contacts.length;
      for(var i = 0; i < contactsLength; i++ ) {
            if (contacts[i].lastName === lastName) {
                printPerson(contacts[i]);    
            }    
      }
};

//add new person to the array of object
var add = function (firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = { // main logic
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }
    list(contacts[contacts.length]);
};

// call add function
add("Tenzin", "Maetok", "tentok@tenzin.mae", "9882204404");

search("tenzin");
