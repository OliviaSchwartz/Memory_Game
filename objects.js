const resetButton = document.querySelector('.reset')
// const card = document.querySelectorAll('.card')
const frontOfCard = document.querySelectorAll('.front')
const backOfCard = document.querySelectorAll('.back')
const playingArea = document.querySelectorAll('.play-area')
const firstClick = ''
const secondClick = ''
const card = document.querySelectorAll('.card')
const counter = 1
const wrong = false
const cardOne = (document.getElementById('cardset-one').dataset.value = 0)
const cardTwo = (document.getElementById('cardset-two').dataset.value = 0)
const cardThree = (document.getElementById('cardset-three').dataset.value = 1)
const cardFour = (document.getElementById('cardset-four').dataset.value = 1)
const cardFive = (document.getElementById('cardset-five').dataset.value = 2)
const cardSix = (document.getElementById('cardset-six').dataset.value = 2)
const cardSeven = (document.getElementById('cardset-seven').dataset.value = 3)
const cardEight = (document.getElementById('cardset-eight').dataset.value = 3)
const cardNine = (document.getElementById('cardset-nine').dataset.value = 4)
const cardTen = (document.getElementById('cardset-ten').dataset.value = 4)
const cardEleven = (document.getElementById('cardset-eleven').dataset.value = 5)
const cardTwelve = (document.getElementById('cardset-twelve').dataset.value = 5)
const cardOptions = [
  cardOne,
  cardTwo,
  cardThree,
  cardFour,
  cardFive,
  cardSix,
  cardSeven,
  cardEight,
  cardNine,
  cardTen,
  cardEleven,
  cardTwelve
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

const selectFirstCard = () => {
  firstClick.currentChoice = cardOptions[0]
  //   compareCards()
}

document.querySelector('#cardset-one').addEventListener('click', flipCard)
document
  .querySelector('#cardset-one')
  .addEventListener('click', selectFirstCard)

document.querySelector('#cardset-two').addEventListener('click', flipCard)
document
  .querySelector('#cardset-two')
  .addEventListener('click', selectSecondCard)

document.querySelector('#cardset-three').addEventListener('click', flipCard)
document
  .querySelector('#cardset-three')
  .addEventListener('click', selectThirdCard)

document.querySelector('#cardset-four').addEventListener('click', flipCard)
document
  .querySelector('#cardset-four')
  .addEventListener('click', selectFourthCard)

document.querySelector('#cardset-five').addEventListener('click', flipCard)
document
  .querySelector('#cardset-five')
  .addEventListener('click', selectFifthCard)

document.querySelector('#cardset-six').addEventListener('click', flipCard)
document
  .querySelector('#cardset-six')
  .addEventListener('click', selectSixthCard)

document.querySelector('#cardset-seven').addEventListener('click', flipCard)
document
  .querySelector('#cardset-seven')
  .addEventListener('click', selectSeventhCard)

document.querySelector('#cardset-eight').addEventListener('click', flipCard)
document
  .querySelector('#cardset-eight')
  .addEventListener('click', selectEighthCard)

document.querySelector('#cardset-nine').addEventListener('click', flipCard)
document
  .querySelector('#cardset-nine')
  .addEventListener('click', selectNinthCard)

document.querySelector('#cardset-ten').addEventListener('click', flipCard)
document
  .querySelector('#cardset-ten')
  .addEventListener('click', selectTenthCard)

document.querySelector('#cardset-eleven').addEventListener('click', flipCard)
document
  .querySelector('#cardset-eleven')
  .addEventListener('click', selectEleventhCard)

document.querySelector('#cardset-twelve').addEventListener('click', flipCard)
document
  .querySelector('#cardset-twelve')
  .addEventListener('click', selectTwelfth)
