const playingCards = document.querySelectorAll('.card')
const resetButton = document.querySelector('.reset')
const isGameActive = true
const card = document.querySelectorAll('.card')
const gameChoice = document.querySelectorAll('img')
const frontOfCard = document.querySelectorAll('.front')
const backOfCard = document.querySelectorAll('.back')
const imgArray = document.querySelectorAll('.card')
const playingArea = document.querySelectorAll('.play-area')
const cardDataValue = parseInt(card.getAttribute('data-value'))

let clickedCards = []
const matchCombinations = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
  [12.13],
  [14, 15]
]

const shuffle = () => {
  card.forEach((card) => {
    let shuffledCards = Math.floor(Math.random() * 16)
    card.style.order = shuffledCards
  })
}
shuffle()

const flipCard = (event) => {
  event.target.classList.toggle('flip')
}

const cardMatch = (matchCombinations) => {
  if (matchCombinations[0] === true) {
  }
}

document
  .querySelectorAll('.card')
  .forEach((card) => card.addEventListener('click', flipCard))
