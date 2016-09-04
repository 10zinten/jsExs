var friends = new Object();
friends.bill = {
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
    for(var key in friends) {
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

search("tenzin");
