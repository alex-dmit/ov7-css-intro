// @ts-check
// const openModal = document.getElementById('open-modal')
// const modalBgrnd = document.querySelector('.modal-background')
// /** @type {HTMLElement | null} */
// const modal = document.querySelector('.modal')

// const modalClose = function () {
//     modal?.classList.remove('show')
//     modalBgrnd?.removeEventListener('click', modalClose)
//     console.log('CLick');
// }

// if (openModal) openModal.onclick = function () {
//     modal?.classList.add('show')
//     if (modalBgrnd) modalBgrnd.addEventListener('click', modalClose)
// }

// const newDiv = document.createElement('div')
// newDiv.classList.add('elem')
// const numElem = document.createElement('span')
// numElem.textContent = '12'
// newDiv.append(numElem)
// document.body.append(newDiv)
// newDiv.remove()

// let counter = 0
// function onAddElem() {
//     const container = document.querySelector('#container')
//     const colors = ['red', 'yellow', 'black', 'green']
//     container.insertAdjacentHTML('beforeend',
//         `<div id=${Math.random()} 
//                     style="color: ${colors[Math.round(Math.random() * (colors.length - 1))]}; background-color: white;" class="elem">
//                       ${counter++}
//                       <button onclick="event.target.parentElement.remove()">X</button>
//                 </div>`)
//     container.scrollIntoView({ behavior: 'smooth', block: 'end' })
// }
// function removeElem(event) {
//     event.target.parentElement.remove()
// }

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.reduce((acc, cur) => {
//     return acc + cur
// }, 0))

// function customParseInt(str) {
//     return Number(str.split('').filter(el => !isNaN(el)).join(''))
//     // return Number(str.split('').filter((el) => {
//     //     return !isNaN(el)
//     // }).join(''))
// }

// console.log(customParseInt('d102f45d')) // => 1245


// function getSubArray(arr) {
//     let arrs = []
//     for (let i = 0; i < arr.length; i++) {
//         let subarr = []
//         for (let j = i; j < arr.length; j++) {
//             subarr.push(arr[j])
//             if ((j < arr.length - 1) && (arr[j] > arr[j + 1])) break
//         }
//         arrs.push(subarr)
//     }
//     return arrs.sort((a, b) => a.length - b.length).pop()
// }

// console.log(getSubArray([5, 4, 2, 3, 4, 2, 3, 4, 56]))





// function getValues(obj) {
//     const result = []    
//     function recursion(value) {
//         if (typeof value === 'object') { // Array of Object
//             for (const el of Object.values(value)) {
//                 recursion(el)
//             }
//         } else result.push(value)
//     }
//     recursion(obj)
//     return result
// }

// console.log(getValues(obj))


// const objEntrance = {
//     a: 1,
//     b: 2,
//     c: 'Hello'
// }

// function convertObj(obj) {
//     return Object.fromEntries(Object.entries(obj).map(prop => {
//         return [
//             prop[0].toUpperCase(), 
//             typeof prop[1] === 'number' ? prop[1] * 2 : prop[1]
//         ]
//     }))
// }

// function convertObj(obj) {
//     const resultObj = {}
//     const keys = Object.keys(obj)
//     keys.forEach(key => {
//         const newValue = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key]
//         // let newValue
//         // if (typeof obj[key] === 'number') newValue = obj[key] * 2 
//         // else newValue = obj[key]
//         resultObj[key.toUpperCase()] = newValue
//     })
//     return resultObj
// }

// console.log(convertObj(objEntrance));

// const objEntrance = {
//     a: 1,
//     b: 2,
//     c: 'Hello',
//     d: true,
//     e: "Hi there"
// }

// function toString(obj) {
//     return `{${Object.entries(obj).map(entry => 
//         `${entry[0]}:${typeof entry[1] === 'string' ? `"${entry[1]}"` : entry[1]}`)
//         .join(',')}}`
//     return '{a:1,b:2,c:"Hello",d:true}'
// }

// console.log(toString(objEntrance));

// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             f: 'Hello'
//         },
//         e: [1,2,3,4,5],
//         f: null,
//         g: {
//             h: [' ']
//         }
//     }
// }

// function getValues(obj) {
//     return obj && typeof obj === 'object'
//         ? Object.values(obj).reduce((acc, cur) => {
//             const arr = getValues(cur)
//             return [...acc, ...arr]
//         }, [])
//         : [obj]
//     // return obj && typeof obj === 'object' 
//     //     ? Object.values(obj).flatMap(getValues)
//     //     : obj

//     // if (obj !== null && typeof obj === 'object') {
//     //     const values = Object.values(obj)
//     //     const result = values.map((value) => {
//     //         return getValues(value)
//     //     })
//     //     const flattered = result.flat()
//     //     return flattered
//     // } else {
//     //     return obj
//     // }
//     // return obj !== null && typeof obj === 'object' 
//     //     // ? Object.values(obj).map(value => getValues(value)).flat()
//     //     // ? Object.values(obj).flatMap(getValues)
//     //     ? Object.values(obj).flatMap(getValues)
//     //     : obj
// }

// // console.log(getValues(obj));
// // arr = []
// function flatten(obj, values = [], keys = []) {
//     for (const key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             const value = obj[key];
//             if (!Array.isArray(obj)) keys.push(key)
//             if (value !== null && typeof value === 'object') {
//                 flatten(value, values, keys)
//             } else {
//                 values.push(value)
//             }
//         }
//     }
//     return [values, keys]
// }

// // const result = flatten(obj)

// // console.log(result)




// const objEntrance = {
//     a: 1,
//     b: 2,
//     c: 'Hello',
//     d: true,
//     e: "Hi there"
// }

// function toString(obj) {
//     return `{${Object.entries(obj).reduce((acc, cur, index, arr) => {
//         const key = cur[0]
//         const value = cur[1]
//         const resultValue = typeof value === 'string' ? ('"' + value + '"') : value
//         const comma = (arr.length - 1 !== index) ? ',' : ''
//         return acc + `${key}:${resultValue}${comma}`
//     }, '')}}`

//         // .map(entry => 
//         // `${entry[0]}:${typeof entry[1] === 'string' ? `"${entry[1]}"` : entry[1]}`)
//         // .join(',')}}`
//     return '{a:1,b:2,c:"Hello",d:true}'
// }

// console.log(toString(objEntrance));


// function sumRecursive(array = []) {
//     if (array.length === 0) return 0
//     return array.pop() + sumRecursive(array)
// }
// sumRecursive()
// // console.log(sumLoop([1,2,3,4,5]));
// // console.log(sumReduce([1,2,3,4,5]));
// const array = [1,2,3,4,5]
// console.log(sumRecursive(array));
// console.log(array);


// function stringWithoutVowels(str) { // "Hello world"
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let result = ''
//     // return 'Hll wrld'
//     // return str.replace(/[aeiou]/ig, '')
//     // return str.split('').filter((letter) => {
//     //     return !vowels.includes(letter)
//     // }).join('')
//     for (const letter of str) {
//         if (!vowels.includes(letter)) result += letter
//     }
//     return result
// }

// console.log(stringWithoutVowels('Hello world'));

// // ["Hello", "world", "Hello"]
// function removeDublicates(arrayStr = []) {
//     // ["Hello", "world", "Hello"]
//     // const obj = {
//     //     Hello: null,
//     //     world: null,
//     // }
//     // return ["Hello", "world"]
//     let obj = {}
//     arrayStr.forEach((str) => {
//         obj[str] = null
//     })
//     return Object.keys(obj)
//     // return [...new Set(arrayStr)]
// }

// console.log(removeDublicates(["Hello", "world", "Hello"]));

//     12
// 11
//     10
// 9
//     8
// 7
//     6
// 5
//     4
// 3
//     2
// 1



// const cars = [
//     {
//         id: 1,
//         name: 'Honda',
//         year: 1999
//     },
//     {
//         id: 2,
//         name: 'Toyota 1',
//         year: 2010
//     },
//     {
//         id: 3,
//         name: 'Toyota 2',
//         year: 2015
//     },
//     {
//         id: 4,
//         name: 'Mazda',
//         year: 2020
//     },
// ]

// function filter(filterObj) {
//     // let filterObj = { name: 'mazd', minYear: 2000 }
//     return cars.filter(car => {
//         return filterByName(car, filterObj)
//             && filterByYear(car, filterObj)
//     })
// }

// function filterByName(car, filterObj) {
//     return car.name.toLowerCase().includes(filterObj.name.toLowerCase())
// }

// function filterByYear(car, filterObj) {
//     if (filterObj.minYear) {}
//     if (filterObj.maxYear) {}
//     return car.year >= filterObj.minYear && car.year <= filterObj.maxYear
// }

// console.log(filter({ name: 'mazd', minYear: 2018 }))


// function rowSumOddNumbers(n) {
// 	// TODO
//   let curNum = 1
//   let curRow = 1
//   while (curRow < n) {
//     curNum += 2 * curRow
//     curRow++
//   }
//   let sum = 0
//   while(n--) {
//     sum += curNum
//     curNum += 2
//   }
//   return sum
// }

// console.log(rowSumOddNumbers(5))



// function addingShifted (arrayOfArrays, shift) {
//     return arrayOfArrays
//         .map((array, i) => {
//             return [
//                 ...Array(shift * i).fill(0), // [0,0,0]
//                 ...array, // [7,7,7,-7,7,7]
//                 ...Array(shift * (arrayOfArrays.length - i - 1)).fill(0)  // [0,0,0,0,0,0]
//             ]
//         })
//         .reduce((result, array) => {
//             return result.map((cur, i) => cur + array[i])
//         })
//   }

// function addingShifted (arrayOfArrays, shift) {
//     return arrayOfArrays.reduce((result, array, i) => {
//       const arrayWithZeros = [
//         ...Array(shift * i).fill(0), 
//         ...array, 
//         ...Array(shift * (arrayOfArrays.length - i - 1)).fill(0)
//       ]
//       return result ? result.map((res, i) => res + arrayWithZeros[i]) : arrayWithZeros
//     }, null)
//   }

// console.log(addingShifted([[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3));

// [1,2,3,4,5].reduce((a,b) => {
//     return a + b
// })