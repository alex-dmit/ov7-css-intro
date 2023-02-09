// Async code - callback
// callback hell
let timeout = setTimeout(function() {
    console.log('setTimeout 500ms');
    setTimeout(function() {
        console.log('setTimeout 700ms');
        setTimeout(function() {
            console.log('setTimeout 900ms');
        }, 900)
    }, 700)
}, 2500)

let interval = setInterval(() => {
    console.log('Interval');
}, 500)

setTimeout(function() {
    clearInterval(interval)
    clearTimeout(timeout)
}, 2000)

// fetch API (application programming interface - HTTP API)
// fetch('./users.json').then((response) => {
//     console.log(response);
//     return response.json()
// }).then((users) => {
//     console.log(users);
// })
// fetch('http://localhost:3000/todos?q=').then((response) => {
//     // console.log(response);
//     return response.json()
// }).then((todos) => {
//     console.log(todos);
// })

// Sync code
console.log('Test');

// const clientX = document.getElementById('clientX')
// const clientY = document.getElementById('clientY')

// Async code
// document.body.addEventListener('mousemove', debounce((event) => {
//     clientX.textContent = event.clientX
//     clientY.textContent = event.clientY
// }, 500))

function debounce(callback, delay = 500) {
    let timeout
    return function(...args) {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    } 
}

const input = document.getElementById('task-filter')
const tasks = document.getElementById('tasks')

input.addEventListener('input', debounce((event) => {
    console.log(event.target.value);
    fetch('http://localhost:3000/todos?q=' + event.target.value)
    .then((response) => {
        return response.json()
    }).then((todos) => {
        tasks.innerHTML = ''
        todos.forEach(todo => {
            tasks.insertAdjacentHTML('beforeend', `<li>${todo.id}: ${todo.title}</li>`)
        })
    })
}, 1000))

