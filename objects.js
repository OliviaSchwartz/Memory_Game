const resetButton = document.querySelector('.reset')
const frontOfCard = document.querySelectorAll('.front')
const backOfCard = document.querySelectorAll('.back')
const playingArea = document.querySelectorAll('.play-area')
const card = document.querySelectorAll('.card')
const cardArray = document.querySelectorAll('.card')
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
const messages = document.querySelector('h5')
let numCardOpened = []
let matched = 0
let wins = 0
let winsDisplay = document.querySelector('.score-display')

const shuffle = () => {
  card.forEach((card) => {
    let shuffledCards = Math.floor(Math.random() * 16)
    card.style.order = shuffledCards
  })
}
shuffle()

const checkforWin = () => {
  if (matched === cardArray.length / 2) {
    messages.innerText = 'Yay! You won! Want to play again?'
    resetButton.style.display = 'block'
    wins++
    winsDisplay.innerText = wins
  } else {
    return
  }
}

const resetGame = () => {
  messages.innerText = ''
  resetButton.style.display = 'none'
  numCardOpened.length = 0
  matched = 0
  document
    .querySelectorAll('.front')
    .forEach((frontOfCard) => frontOfCard.classList.remove('flip'))
  //   for (let i = 0; i < frontOfCard.length; i++) {
  //     frontOfCard[i].classList.remove('flip')
  //   }

  document.querySelectorAll('.card').forEach((card) => (card.style.opacity = 1))
  //   for (let i = 0; i < card.length; i++) {
  //     card[i].style.opacity = 1
  //   }
  document
    .querySelectorAll('.card')
    .forEach((card) => card.addEventListener('click', flipCard))
  shuffle()
  compare()
}

const compare = (clickedCard) => {
  if (numCardOpened[0].dataset.value === numCardOpened[1].dataset.value) {
    messages.innerText = 'Match'
    numCardOpened[0].style.opacity = 0.5
    numCardOpened[1].style.opacity = 0.5
    numCardOpened[0].removeEventListener('click', flipCard)
    numCardOpened[1].removeEventListener('click', flipCard)
    numCardOpened.length = 0
    matched++
  } else if (numCardOpened[0].dataset.value != numCardOpened[1].dataset.value) {
    setTimeout(() => {
      messages.innerText = ''
      numCardOpened[0].children[0].classList.remove('flip')
      numCardOpened[1].children[0].classList.remove('flip')
      numCardOpened.length = 0
    }, 600)
  }
  checkforWin()
}

const flipCard = (event) => {
  event.target.classList.toggle('flip')
  let clickedCard = event.currentTarget
  numCardOpened.push(clickedCard)
  compare(clickedCard)
}
document
  .querySelectorAll('.card')
  .forEach((card) => card.addEventListener('click', flipCard))

document.querySelector('.reset').addEventListener('click', resetGame)
