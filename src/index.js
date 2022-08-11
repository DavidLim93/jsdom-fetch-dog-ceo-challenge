console.log('%c HI', 'color: firebrick')

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector('#breed-dropdown')
let breedsArray = []

// Challenge one

function getImages() {
    fetch(imgUrl)
    .then(resp=>resp.json())
    .then(images => {
        const img = images.message
        let imgArray = createImgElement(img)
        renderImg(imgArray)
    })
}

    function createImgElement(img) {
        return img.map((img) => {
            let i = `<img src=${img}>`
            return i
        })
    }

function renderImg(imgArray) {
    imgArray.forEach(element => {
        renderElement(element) 
    })
}

function renderElement(element) {
    ulContainer.innerHTML += element
}



//Challenge 2
function getBreeds() {
    fetch(breedUrl)
    .then(resp=>resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLi = createLiElement(breedsArray)
        createLiElement(breedsArray)
        renderLi(breedsLi)

    })
}

function createLiElement(breedsArray) {
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}

function renderLi(breedsLi) {
    breedsLi.forEach(element => {
        renderElement(element)
    })
}


//challenge 3

function handleClick(event) {
    event.target.style.color= 'red'

}


//challenge 3
function handleChange (event) {
    const letter = event.target.value
    const filter = breedsArray.filter(breed => breed.startsWith(letter))
    const filterBreeds = createLiElement(filter)
    ulContainer.innerHTML = ''
    renderLi(filterBreeds)
}






getImages()
getBreeds()


//events

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)




