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