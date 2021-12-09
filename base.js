// Work with DOM

// Create div
const div = document.createElement('div')

// Add to div wrapper class
div.classList.add('wrapper')

// Move div to body
const body = document.body
body.appendChild(div)

// Create h1 - DOM (Document Object Model)
const header = document.createElement('h1')
header.textContent = 'DOM (Document Object Model)'

// Move header to body, before div
div.insertAdjacentElement('beforebegin', header)

// Create <ul></ul>
// Add 3 elements to <ul> "one, two, three" 
const ul = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>`

// Move <ul> to element with class wrapper
div.innerHTML = ul

// Create img
const img = document.createElement('img')

// Add to img next param
// 1. Add source
img.src = 'https://picsum.photos/240'

// 2. Add width 240
img.width = 240

// 3. Add class "super"
img.classList.add('super')

// 4. Add Alt "Super Man"
img.alt = 'Super Man'

// Move img to element with class "wrapper"
div.appendChild(img)

// Create <div> with class 'pDiv', using HTML str. + double <p>
const elemHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`

// Move elemHTML before <ul>
const ulList = div.querySelector('ul')
ulList.insertAdjacentHTML('beforebegin', elemHTML)

//Add class "text" to 2-nd paragraph
const pDiv = document.querySelector('.pDiv')
pDiv.children[1].classList.add('text')

// Del 1-st paragraph
pDiv.firstElementChild.remove()

//Create function generateAutoCard(brand, color, year)
const generateAutoCard= (brand, year, color) => {
    const curDate = new Date()
    const curYear= curDate.getFullYear()
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
            <p>Цвет: ${color}</p>
            <button type="button" class="btn">Delete</button>
        </div>`
}

// Create new div with clas autos
const carsDiv = document.createElement('div')
carsDiv.classList.add('autos')

// Create 3 auto cards, using generateAutoCard function
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'red'},
    {brand: 'Opel', year: 2014, color: 'green'},
    {brand: 'BMW', year: 2013, color: 'blue'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.year, car.color)
}).join('')

// Move created cards to div with class autos
carsDiv.innerHTML = carsHTML

// Move div with class autos befor div with class wrapper
div.insertAdjacentElement('beforebegin', carsDiv)

// Add 'delete button' to cards
// If delete is clicked, remove card from DOM

// Select elements with class "btn"
const buttons = document.querySelectorAll('.btn')

// Create del function
function handleClick(e) {
    const currentButton = e.currentTarget
    currentButton.closest('.autoCard').remove()
    console.log(currentButton.parentElement)
}

// Attach event handler to every button using cycle
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})