let i = 1 // if(true) {let i = 1; while (true) {console.log(i)}}
const b = 5
var c = 4
let c2

let num = 45.6758576 // number
let str = "dgdfgdfg" // string
str = "hello"
let bool = true // boolean
let Null = null 
let undef = undefined
let sym = Symbol('UserServiceAuth')
let sym2 = Symbol('UserServiceAuth')
const token = 'UserServiceAuth'

const obj = {
    a: 1,
    b: 2
}

obj.a = 'Hello world'
obj.c = 3
console.log(obj.c);

const arr = [1,2,3]
typeof arr // object
Array.isArray(arr) // true
arr instanceof Array // true

function test(arg1, arg2) {
    return arg1 + arg2
}

const test2 = function (arg1, arg2) {
    return arg1 + arg2
}

const test3 = (arg1, arg2) => {
    if (arg1 > 0) return arg1 - arg2
    if (arg1 < 0) return arg1 * arg2
    return arg2
}

const test4 = (arg1, arg2) => arg1 + arg2

const UserModel = {
    name: "John",
    address: "Volgograd",
    getUserData: function() {
        return this.name + this.address
    },
    getUserData2() { // method
        return this.name + this.address
    },
    getUserData3: () => {
        return this.name + this.address
    },
}

if (userName.length > 0) {
    console.log(userName)
}

let changeMe
if (userName) console.log(userName)
else if (userName.length === 1 && userName.length === 2) {
    changeMe = '1 or 2'
    console.log('1 or 2')
}
else if (userName.length === 3) {
    changeMe = '3'
    console.log('3')
} else {
    console.log('Else condition')
}

switch (userName.length) {
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
    case 3:
        console.log('3')
        break;

    default:
        console.log('Always runs')
        break;
}

const gender = 'man'

const fullName = (gender === 'man') 
    ? `Mr. ${userName}` 
    : (gender === 'woman') 
        ? `Mrs. ${userName}`
        : anotherGender()

function anotherGender() {
    return `I dont know who are you`
}

greeting(fullName)

function greeting(message) {
    console.log(message)
}


let arr2 = [1,2,3,4,5]

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    console.log(element)
}

for (let i = arr2.length - 1; i >= 0; i--) {
    const element = arr2[i];
    console.log(element)
}

for (const element of arr2) {
    console.log(element)
}

for (const index in arr2) {
    console.log(arr2[index])
}

arr2.forEach((elem, index) => {
    console.log(`${index} = ${elem}`);
})

arr2.map((elem, index) => {
    return ([index, elem]);
})

let hello = 'Hello'
let helloArr = hello.split('')
while (helloArr.length) {
    console.log(helloArr.pop())
}

let hello2 = 'Hello'
while (hello2) {
    console.log(hello2.slice(-1))
    hello2 = hello2.slice(0,-1)
}

let hello3 = 'Hello'
let index = hello3.length - 1
while (index >= 0) {
    console.log(hello3[index])
    index--
}






typeof num === "number"

const userName = ""



function sum(a, b) {
    if (typeof a !== 'number') a = Number(a)
    if (typeof b !== 'number') b = Number(b)
    return a + b
}

sum('1', '2')

const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            f: 'Hello'
        },
        e: [1,2,3,4,5]
    }
}

function getValues(obj) {
    const result = []    
    function recursion(value) {
        if (typeof value === 'object') { // Array of Object
            for (const el of Object.values(value)) {
                recursion(el)
            }
        } else result.push(value)
    }
    recursion(obj)
    return result
}

console.log(getValues(obj))

Object.keys(obj)
Object.entries(obj)
Object.values(obj)
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key)
    }
}

const objEntrence = {
    a: 1,
    b: 2,
    c: 'Hello'
}
const objResult = {
    A: 2,
    B: 4,
    C: 'Hello'
}

function convertObj(obj) {
    const entries = Object.entries(obj)
    return Object.fromEntries(entries.map(prop => {
        return [
            prop[0].toUpperCase(), 
            typeof prop[1] === 'number' ? prop[1] * 2 : prop[1]
        ]
    }))
}

// console.log(convertObj(objEntrence));

function sumLoop(arr = []) {

}

function sumReduce(arr = []) {
    
}

function sumRecursive(arr = []) {
    if (arr.length === 0) return 0
    return arr.pop() + sumRecursive(arr)
}

// console.log(sumLoop([1,2,3,4,5]));
// console.log(sumReduce([1,2,3,4,5]));
console.log(sumRecursive([1,2,3,4,5]));