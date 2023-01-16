const cars = [
    {
        id: 1,
        name: 'Honda',
        year: 1999
    },
    {
        id: 2,
        name: 'Toyota 1',
        year: 2010
    },
    {
        id: 3,
        name: 'Toyota 2',
        year: 2015
    },
    {
        id: 4,
        name: 'Mazda',
        year: 2020
    },
]

function filter(filterObj) {
    // let filterObj = { name: 'mazd', minYear: 2000, maxYear: 2010 }
    return cars.filter(car => {
        return filterByName(car, filterObj)
            && filterByYear(car, filterObj)
    })
}

function filterByName(car, filterObj) {
    return car.name.toLowerCase().includes(filterObj.name.toLowerCase())
}

function filterByYear(car, filterObj) {
    if (filterObj.minYear) {}
    if (filterObj.maxYear) {}
    return car.year >= filterObj.minYear && car.year <= filterObj.maxYear
}

// console.log(filter({ name: 'mazd', minYear: 2018, maxYear: 2021 }))

function render(carsForRender = []) {
    const carsList = document.getElementById('cars-list')
    
    carsList.innerHTML = carsForRender.reduce((acc, cur) => {
        return acc + `<li>${cur.id}: ${cur.name}. Model year: ${cur.year}</li>`
    }, '')
}

render(cars)

const filterForm = document.getElementById('filter')

filterForm.onsubmit = function(event) {
    event.preventDefault()
    const formData = new FormData(filterForm)
    // console.log(filterForm.car-name.value);
    const carName = formData.get('car-name');
    const minYear = formData.get('min-year');
    const maxYear = formData.get('max-year');
    console.log(carName, minYear, maxYear);
    render(filter({
        name: carName,
        minYear,
        maxYear
    }))
}