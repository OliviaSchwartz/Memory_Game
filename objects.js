const resetButton = document.querySelector('.reset')
const isGameActive = true
const card = document.querySelectorAll('.card')
const gameChoice = document.querySelectorAll('img')
const frontOfCard = document.querySelectorAll('.front')
const backOfCard = document.querySelectorAll('.back')
const playingArea = document.querySelectorAll('.play-area')
let match
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
const cardEleven = (document.getElementById(
  'cardset-eleven'
).dataset.value = 10)
const cardTwelve = (document.getElementById(
  'cardset-twelve'
).dataset.value = 11)
// const cardThirteen = (document.getElementById(
//   'cardset-thirteen'
// ).dataset.value = 12)
// const cardFourteen = (document.getElementById(
//   'cardset-fourteen'
// ).dataset.value = 13)
// const cardFifteen = (document.getElementById(
//   'cardset-fifteen'
// ).dataset.value = 14)
// const cardSixteen = (document.getElementById(
//   'cardset-sixteen'
// ).dataset.value = 15)

const matchCombinations = [
  [cardOne, cardTwo],
  [cardThree, cardFour],
  [cardFive, cardSix],
  [cardSeven, cardEight],
  [cardNine, cardTen],
  [cardEleven, cardTwelve]
  //   [cardThirteen, cardFourteen],
  //   [cardFifteen, cardSixteen]
]
const flipCard = (event) => {
  event.target.classList.toggle('flip')
  cardMatch()
}

let cardMatch = () => {
  let match = false
  let matchRules = matchCombinations.length
  for (let i = 0; i < matchRules; i++) {
    // const matchRules = matchCombinations[i]
    let pickCardOne = matchCombinations[i][0]
    let pickCardTwo = matchCombinations[i][1]

    if (pickCardOne === pickCardTwo) {
    }
  }
}
cardMatch()
const shuffle = () => {
  card.forEach((card) => {
    let shuffledCards = Math.floor(Math.random() * 16)
    card.style.order = shuffledCards
  })
}
shuffle()

// const flipCard = (event) => {
//   event.target.classList.toggle('flip')
// }

document
  .querySelectorAll('.card')
  .forEach((card) => card.addEventListener('click', flipCard))
