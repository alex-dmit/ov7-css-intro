const cars = [
    {
        id: 1,
        name: 'Honda',
        year: 1999,
        price: 10000
    },
    {
        id: 2,
        name: 'Toyota 1',
        year: 2010,
        price: 20000
    },
    {
        id: 3,
        name: 'Toyota 2',
        year: 2015,
        price: 30000
    },
    {
        id: 4,
        name: 'Mazda',
        year: 2020,
        price: 40000
    },
]

// JSdoc
/** @type {{carid: number, quantity: number}[]} */
const cart = [] // [{carid: 1, quantity: 1}, {carid: 2, quantity: 3}]

const carsList = document.getElementById('cars-list')

carsList.innerHTML = cars.reduce((acc, car) => {
    return acc + `<li data-carid="${car.id}">${car.id}: ${car.name}. Model year: ${car.year}. Price: ${car.price} <button class="btn-add-to-cart">Add to cart</button></li>`
}, '')

carsList.addEventListener('click', function (event) {
    // if (event.target.nodeName === "BUTTON") {
    if (event.target.classList.contains('btn-add-to-cart')) {
        const carid = +event.target.closest('li').dataset.carid
        // TODO
        const cartItem = cart.find(el => el.carid === carid)
        if (cartItem) cartItem.quantity++
        else cart.push({ carid, quantity: 1 })
        renderCart()
    }
})

const cartElem = document.getElementById('cart')

function renderCart() {
    cartElem.innerHTML = cart.reduce((acc, cartItem) => {
        const car = cars.find(car => car.id === cartItem.carid)
        if (car) return acc + `<li>${car.id}: ${car.name}. Price: ${car.price}. Quantity: ${cartItem.quantity}. Sum: ${car.price * cartItem.quantity}</li>`
        return ''
    }, '')
}