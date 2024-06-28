//.........first class
var school = "altschool";
console.log(school);
var person = "WelcomeTNola";
if (typeof person === "string") {
    person.split("T");
}
else {
    //number
}
console.log(person);
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
// objFlex[Symbol("id")] = true;
var auth = { isAdmin: false, name: "Lade" };
var sample = {
    //key:string, value:string
    color: "#000",
    2890: "white",
    // type: 00 or 99: 200 - invalid (type of number cannot be assiged to type of string)
};
//mixing typees
var specialArr = ["hmm", 88, {}, []];
function greeting(msg) {
    return msg + " Hi Timi";
}
console.log(greeting("Welcome"));
//typing arguement
function add(a, b) {
    return a + b;
}
console.log(add(9, 5));
function add2(a, b) {
    return a + b;
}
add2(7, 7);
var user = {
    name: "hailey",
    skinType: "brown",
    isUserReal: false,
};
function greet2(person) {
    return "Hello ".concat(person.specie);
}
console.log(greet2({ specie: "mammal", isUserStudent: true }));
//'satisfiers', 'as const', '!'
var addTwoNumberObject = function (params) {
    if (params.b) {
        return params.a + params.b;
    }
    return params.a;
};
console.log(addTwoNumberObject({ a: 0.9, b: 1 }));
//using default parameter in typescript
var addTwoNumberObject1 = function (a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    return a + b;
};
addTwoNumberObject1();
function getPersonString(admin) {
    return "".concat(admin.name, " is a ").concat(admin.role);
}
console.log(getPersonString({ name: "kenneth", role: "admin" }));
function getUserPost(person) {
    return person.posts;
}
console.log(getUserPost({
    posts: [{
            title: "Rainy days",
            author: "Marrk",
            id: 990,
            content: "oh beautiful day"
        }],
    name: "hima leo",
    role: "superadmin"
}));
//learning generics
function getRandomNumberElement(items) {
    var RandomIndex = Math.floor(Math.random() * items.length);
    return items[RandomIndex];
}
var randyValue = getRandomNumberElement(["ayo", "tunmise", "peter", "dorcas"]);
console.log(randyValue);
var r = getRandomNumberElement([true, false]);
