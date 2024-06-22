//.........first class
let school:string = "altschool"  
console.log(school)
let person:string | number = "WelcomeTNola";
if(typeof person === "string"){
    person.split("T");
} else{
    //number
}
console.log(person)
//array
let arrayOfScores = [99, 66, 84, 97, 43];
let arrayOfScoresT: number[] = [95, 88, 9]

let arrayOfNames: string[] = ["tola", "bisola", "perez", "uma"]
let names: Array<string> = ["emma", "peter"]

let arrayOfArrays = [["a"], ["c"]]

//records
let profile : {name:string; age:number; occupation?:string} = {
    name: "tola",
    age:99,
}
let objFlex: Record<string | symbol, string| boolean | number> = {};
objFlex.course="physiology"
objFlex[Symbol("id")] = true;

let auth = {isAdmin: false, name:"Lade"} 
let sample : Record<string, string> = {  //key:string, value:string
    color: "#000",
    2890: "white"
    // type: 00 or 99: 200 - invalid (type of number cannot be assiged to type of string)
}

//mixing typees
const specialArr: Array<number | string | [] | {}> = [ 
    "hmm",
    88,
    {},
    []
]

function greeting(msg:string): string{
    return msg + "Hi Timi";
}
console.log(greeting("Welcome"));

//typing arguement
function add(a:number,b:number): number{
    return a + b;
}
console.log(add(9,5))

//function overloading
function add2(a:number, b:number):number;
function add2(a:string, b:string):string;
function add2(a:any, b:any){
    return a + b;
}
add2(7, 7)

//type assertion as

//type alias
type Person = {
    name: string,
    skinType: string,
    isUserReal : boolean
}
let user: Person = {
    name:"hailey",
    skinType: "brown",
    isUserReal: false
}
//interface
interface Person2{
    specie:string,
    isUserStudent: boolean
}

function greet2(person: Person2){
    return `Hello ${person.specie}`
}
console.log(greet2(specie))


// .........fourth class 
//learning generics 
function getRandomNumberElement<T>(items: T[]): T{
    let RandomIndex = Math.floor(Math.random() * items.length);
    return items[RandomIndex];
}
let randyValue = getRandomNumberElement(['ayo', 'tunmise', 'peter', 'dorcas'])
console.log(randyValue);
let r = getRandomNumberElement([true, false]);