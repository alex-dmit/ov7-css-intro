// @ts-check
const openModal = document.getElementById('open-modal')
const modalBgrnd = document.querySelector('.modal-background')
/** @type {HTMLElement | null} */
const modal = document.querySelector('.modal')

const modalClose = function () {
    modal?.classList.remove('show')
    modalBgrnd?.removeEventListener('click', modalClose)
    console.log('CLick');
}

if (openModal) openModal.onclick = function () {
    modal?.classList.add('show')
    if (modalBgrnd) modalBgrnd.addEventListener('click', modalClose)
}

const newDiv = document.createElement('div')
newDiv.classList.add('elem')
const numElem = document.createElement('span')
numElem.textContent = '12'
newDiv.append(numElem)
document.body.append(newDiv)
newDiv.remove()

let counter = 0
function onAddElem() {
    const container = document.querySelector('#container')
    const colors = ['red', 'yellow', 'black', 'green']
    container.insertAdjacentHTML('beforeend',
        `<div id=${Math.random()} 
                    style="color: ${colors[Math.round(Math.random() * (colors.length - 1))]}; background-color: white;" class="elem">
                      ${counter++}
                      <button onclick="event.target.parentElement.remove()">X</button>
                </div>`)
    container.scrollIntoView({ behavior: 'smooth', block: 'end' })
}
function removeElem(event) {
    event.target.parentElement.remove()
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.reduce((acc, cur) => {
    return acc + cur
}, 0))

function customParseInt(str) {
    return Number(str.split('').filter(el => !isNaN(el)).join(''))
    // return Number(str.split('').filter((el) => {
    //     return !isNaN(el)
    // }).join(''))
}

console.log(customParseInt('d102f45d')) // => 1245