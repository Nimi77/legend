//.........first class
var school = "altschool";
console.log(school);
var person = "WelcomeTNola";
if (typeof person === "string") {
    person.split("T");console.log(person);
}
else {
    //number
}

//array
var arrayOfScores = [99, 66, 84, 97, 43];
var arrayOfScoresT = [95, 88, 9];
var arrayOfNames = ["tola", "bisola", "perez", "uma"];
var names = ["emma", "peter"];
var arrayOfArrays = [["a"], ["c"]];
//records
var profile = {
    name: "tola",
    age: 99,
};

var objFlex = {};
objFlex.course = "physiology";
objFlex[Symbol("id")] = true;
console.log(objFlex);

function greeting(msg) {
    return msg + " Timi";
}
console.log(greeting("Welcome"));

function add(a, b) {
    return a + b;
}
console.log(add(9, 5));


// .........fourth class 
//learning generics 
function getRandomNumberElement(items) {
    var RandomIndex = Math.floor(Math.random() * items.length);
    return items[RandomIndex];
}
var randyValue = getRandomNumberElement(['ayo', 'tunmise', 'peter', 'dorcas']);
console.log(randyValue);
var r = getRandomNumberElement([true, false]);
