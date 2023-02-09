const list = [
    { id: 1, message: 'One' },
    { id: 2, message: 'Two' },
    { id: 3, message: 'Three' },
    { id: 4, message: 'Four' },
    { id: 5, message: 'Five' },
]
const listElem = document.getElementById('list')
const startBtn = document.getElementById('start')

// Web API
// callback function
startBtn.addEventListener('click', () => {
    let count = 0
    startBtn.disabled = true;
    function createLi() {
        const li = document.createElement('li')
        li.textContent = list[count].message
        li.className = 'show li-elem'
        listElem.append(li)
        count++
    }
    delay().then(() => {
        createLi()
        return delay(null, 500)
    }).then(() => {
        createLi()
        return delay(null, 500)
    }).then(() => {
        createLi()
        return delay(null, 500)
    }).then(() => {
        createLi()
        return delay(null, 500)
    }).then(() => {
        createLi()
        count = 0
        startBtn.disabled = false;
    })
    // recursion()
    // function recursion() {        
    //     if (count === list.length) {
    //         count = 0
    //         startBtn.disabled = false;
    //         return
    //     }
    //     setTimeout(() => {
    //         const li = document.createElement('li')
    //         li.textContent = list[count].message
    //         li.className = 'show li-elem'
    //         listElem.append(li)
    //         count++
    //         recursion()
    //     }, 500)
    // }
    // const interval = setInterval(() => {
    //     const li = document.createElement('li')
    //     li.textContent = list[count].message
    //     li.className = 'show li-elem'
    //     listElem.append(li)
    //     count++
    //     if (count === list.length) {
    //         count = 0
    //         clearInterval(interval)
    //         startBtn.disabled = false;
    //     }
    // }, 500)
})

function delay(data, ms = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, ms)
    })
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // get data from API
        resolve('Response from server')
    }, 500)
    // throw new Error('Custom error')
    // setTimeout(() => {
    //     reject('Page not found')
    // }, 4500)
})

promise.then((message) => {
    console.log(message)
    // throw new Error('Custom error')
    return delay('Response from server 2', 500)
}).then((message) => {
    console.log(message)
    // throw new Error('Custom error')
    return delay('Response from server 3', 1000)
}).then((message) => {
    console.log(message);
    return 'Response from server 4'
}).then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error)
})

// try {
//     setTimeout(() => {
//         throw new Error('Custom error')
//     }, 100)
// } catch (error) {
//     console.log(error)
// }