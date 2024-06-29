
//.........first class
var school = "altschool";
console.log(school);
var person = "WelcomeTNola";
if (typeof person === "string") {
    person.split("T");
}
else {
    person;
}
console.log(person.split("T"));
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
    return "".concat(admin.name, " is an ").concat(admin.role);
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
var listOfStudents = new Set();
listOfStudents.add("poliyol");
listOfStudents.add("matthew");
listOfStudents.add("matthew");
console.log(listOfStudents);
//typing map
var mapStudentScores = new Map();
mapStudentScores.set("yimo", 90);
console.log(mapStudentScores);
//tupples are arrays that have fix size
var tuple = ["ade", 99];
console.log(tuple);
var color; // or Array<number>;
color = [255, 0, 0, 0.5];
var colorString = "rgb(".concat(color.join(", "), ")");
console.log(colorString);
//unions
var str;
//union at the level of types and interface
//intersection
var morePost = {
    title: "jagun",
    author: 'Marvel',
    id: 9,
    content: 'marvel speed',
    tags: ["action", "thriller"]
};
var addThreeNumber = function (params) {
    return params.a + params.b + params.c;
};
console.log(addThreeNumber({ a: 9, b: 9, c: 9 }));
//declaring N object
var newStringIndex;
newStringIndex = ["f1", "1"];
newStringIndex[0] = 'hii';
console.log(newStringIndex);
var arrOfCommenter = ['ama', 'leo'];
//arrOfCommenter[0] = 'aa' //this won't be possible, in readonly you cannot push, or update the array
var arrOfCommenter2 = ["poly"];
var newGithubUser = {
    login: "hola",
    id: 9,
};
var newGithubModified = {
    login: "imma"
};
console.log(newGithubModified);
//.......learning generics
//T & U --- INTERSECTION  T | U --UNIOUN
function merge(firstObject, secondObject) {
    return __assign(__assign({}, firstObject), secondObject);
}
var res22 = merge({ name: "Tola" }, { age: 9 });
var res21 = merge({ school: "Altschool" }, { job: "lawmaker" });
console.log(res21, res22);
//another generic example
function getRandomNumberElement(items) {
    var RandomIndex = Math.floor(Math.random() * items.length);
    return items[RandomIndex];
}
var randyValue = getRandomNumberElement(["ayo", "tunmise", "peter", "dorcas"]);
console.log(randyValue);
var r = getRandomNumberElement([true, false]);
//enumss
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["CLIENT"] = 1] = "CLIENT";
    Role[Role["SUPERADMIN"] = 2] = "SUPERADMIN";
})(Role || (Role = {}));
function checkUserRole(user) {
    var role = user.role;
    if (role === Role.ADMIN) {
        // time quards and narrowing 
        return "admin";
    }
    else if (role === Role.CLIENT) {
        return "client";
    }
    return "superAdmin";
}
var useAltschool = {
    id: 6,
    role: Role.ADMIN,
    name: "tope",
    address: "zone4"
};
var confirmInfo = checkUserRole(useAltschool);
console.log(confirmInfo);
var u = 'role';
console.log(u);
//zod, drizzle
// Proficiency in advanced animation libraries like GSAP, Lottie, Three.js, Anime.js, 
// and Framer Motion to create sophisticated and high-performance website animations.
