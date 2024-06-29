//.........first class
let school: string = "altschool";
console.log(school);
let person: string | number = "WelcomeTNola";
if (typeof person === "string") {
   person.split("T");
} else {
  person;
}
console.log(person.split("T"));
//array
let arrayOfScores = [99, 66, 84, 97, 43];
let arrayOfScoresT: number[] = [95, 88, 9];

let arrayOfNames: string[] = ["tola", "bisola", "perez", "uma"];
let names: Array<string> = ["emma", "peter"];

let arrayOfArrays = [["a"], ["c"]];

//records
let profile: { name: string; age: number; occupation?: string } = {
  name: "tola",
  age: 99,
};
let objFlex: Record<string | symbol, string | boolean | number> = {};
objFlex.course = "physiology";
// objFlex[Symbol("id")] = true;

let auth = { isAdmin: false, name: "Lade" };
let sample: Record<string, string> = {
  //key:string, value:string
  color: "#000",
  2890: "white",
  // type: 00 or 99: 200 - invalid (type of number cannot be assiged to type of string)
};

//mixing typees
const specialArr: Array<number | string | [] | {}> = ["hmm", 88, {}, []];

function greeting(msg: string): string {
  return msg + " Hi Timi";
}
console.log(greeting("Welcome"));

//typing arguement
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(9, 5));

//function overloading
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: any, b: any) {
  return a + b;
}
add2(7, 7);

//type assertion as

//type alias
type Person = {
  name: string;
  skinType: string;
  isUserReal: boolean;
};
let user: Person = {
  name: "hailey",
  skinType: "brown",
  isUserReal: false,
};
//interface
interface Person2 {
  specie: string;
  isUserStudent: boolean;
}

function greet2(person: Person2) {
  return `Hello ${person.specie}`;
}
console.log(greet2({ specie: "mammal", isUserStudent: true }));

//'satisfiers', 'as const', '!'
const addTwoNumberObject = (params: { a: number; b?: number }) => {
  if (params.b) {
    return params.a + params.b;
  }
  return params.a;
};
console.log(addTwoNumberObject({ a: 0.9, b: 1 }));

//using default parameter in typescript
const addTwoNumberObject1 = (a: number = 1, b: number = 2) => {
  return a + b;
};
addTwoNumberObject1();

type Admin = {
  name: string;
  role: "client" | "admin";
};
function getPersonString(admin: Admin) {
  return `${admin.name} is an ${admin.role}`;
}
console.log(getPersonString({ name: "kenneth", role: "admin" }));

type Post = {title: string, author: string, id: number, content: string};
type AdminBlogPosts = {
  posts: Array<Post>;
  name: string;
  role: "admin" | "superadmin";
};
function getUserPost(person: AdminBlogPosts) {
  return person.posts;
}
console.log(getUserPost({
    posts:[{
        title: "Rainy days",
        author: "Marrk",
        id: 990,
        content:"oh beautiful day"
    }],
    name:"hima leo",
    role:"superadmin"
}))

const listOfStudents = new Set<string>();
listOfStudents.add("poliyol")
listOfStudents.add("matthew")
listOfStudents.add("matthew")
console.log(listOfStudents)

//typing map
let mapStudentScores = new Map<string,number>();
mapStudentScores.set("yimo", 90)
console.log(mapStudentScores);

//tupples are arrays that have fix size
let tuple : [string, number] = ["ade", 99]; 
console.log(tuple)
let color: [number, number, number, number?]; // or Array<number>;
color = [255,0,0, 0.5] ;
let colorString =  `rgb(${color.join(", ")})`;
console.log(colorString)

//unions
let str:number | string;
//union at the level of types and interface

//intersection
let morePost : Post & {tags: string[]} = {  //or type Tags = {tags: string[]}   => let morePost: Post & Tags = {}
    title: "jagun",
    author: 'Marvel',
    id:9,
    content:'marvel speed',
    tags: ["action", "thriller"]
}

interface Params {
    a:number;
    b:number;
}
const addThreeNumber = (params: Params & {c:number}):number => {
    return params.a + params.b + params.c
}
console.log(addThreeNumber({a:9, b:9, c:9}))

//declaring N object
let newStringIndex: { [index:number]: string};
newStringIndex = ["f1", "1"]
newStringIndex[0] = 'hii'
console.log(newStringIndex)

let arrOfCommenter: readonly string[]= ['ama', 'leo'];
//arrOfCommenter[0] = 'aa' //this won't be possible, in readonly you cannot push, or update the array
let arrOfCommenter2 : ReadonlyArray<string> = ["poly"]

//fetching github repo 
// async function fetchGithubUser(username:string) {
//   const response = await fetch(`https://api.github.com/users/${username}`)
//   return response.json()
// }
// (async () => {
//   let githubUser = await fetchGithubUser('Nimi77');
//   console.log(githubUser.avatar_url)
// })();

//special utility type   --- Omit<>, Pick<>, ReturnType<>, Partial<>, KeyOf | indexof
type GithubUser = {
    login:string;
    id:number;
    avatar_url:string;
    following:number;
    created_at:string;
  }

type NewGithubUser= Pick<GithubUser, "login" | "id">;
let newGithubUser: NewGithubUser = {
    login:"hola",
    id:9,
}

type NewGithubModified = Omit<NewGithubUser,"id">
let newGithubModified : NewGithubModified = {
    login: "imma"
}
console.log(newGithubModified)

//.......learning generics
//T & U --- INTERSECTION  T | U --UNIOUN
function merge<T, U>(firstObject:T, secondObject:U){
  return{
    ...firstObject,
    ...secondObject
  }
}
type Result<T extends Function> = T extends (...args:any) => infer R ? R:any;
//"extend" is a way to constrain generics
type NewType = Result<typeof add2>
let res22 = merge({name:"Tola"}, {age:9})
let res21 =merge({school:"Altschool"}, {job:"lawmaker"})
console.log(res21, res22)

//another generic example
function getRandomNumberElement<T>(items: T[]): T {
  let RandomIndex = Math.floor(Math.random() * items.length);
  return items[RandomIndex];
}
let randyValue = getRandomNumberElement(["ayo", "tunmise", "peter", "dorcas"]);
console.log(randyValue);

let r = getRandomNumberElement([true, false]);

//enumss
enum Role {
  ADMIN,
  CLIENT, 
  SUPERADMIN
}
type User = {
  id: number,
  role: Role,   // or role: "client" | admin | superAdmin
  name:string,
  address:string
}
function checkUserRole(user: User): string{
  const {role} = user;

  if(role === Role.ADMIN ){
  // time quards and narrowing 
    return "admin"
  }else if(role === Role.CLIENT){
    return "client";
  }
  return "superAdmin"
}
let useAltschool = {
  id:6,
  role: Role.ADMIN,
  name:"tope",
  address:"zone4"
}
let confirmInfo = checkUserRole(useAltschool)
console.log(confirmInfo)

//type manipulation --- keyof, typeof, in, infer, extend, in, as, is

type U = keyof User
let u:U = 'role'
console.log(u)

let myFav = "biscuit"
type Fav = typeof myFav

type checkFav = ReturnType<typeof checkUserRole>

function f(){
  return{x:9, y:6}
}
//infer
type P = ReturnType<typeof f>

//indexed  access types
type Person44 = {name:string, fav:string , id:number, location:string}
type ID = Person44["name" | "location"];

//Conditional Types
interface ThreeParams extends Params{
  p:number;
}
type NewParams = ThreeParams extends Params ? string : number;

//mapped Types
type Person34 = {
  [key:string]: string;
}
//creating types with  Template Object Literals
type World = "worldd"
type greeting = `hello ${World}`;


//zod, drizzle
// Proficiency in advanced animation libraries like GSAP, Lottie, Three.js, Anime.js, 
// and Framer Motion to create sophisticated and high-performance website animations.