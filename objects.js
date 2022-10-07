const resetButton = document.querySelector('.reset')
const frontOfCard = document.querySelectorAll('.front')
const backOfCard = document.querySelectorAll('.back')
const playingArea = document.querySelectorAll('.play-area')
const firstClick = { currentChoice: null }
const secondClick = { currentChoice: null }
const gameWon = ''
const card = document.querySelectorAll('.card')
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
let flippedCard = 0
let firstCardNumber = ''
let secondCardNumber = ''
let numCardOpened = []
const shuffle = () => {
  card.forEach((card) => {
    let shuffledCards = Math.floor(Math.random() * 16)
    card.style.order = shuffledCards
  })
}
shuffle()

const matchCards = () => {
  if (firstCardNumber === secondCardNumber) {
    console.log('Yes')
  } else if (firstCardNumber != secondCardNumber) {
    console.log('nope')
  } else console.log('try again')
}

const compare = (clickedCard) => {
  if (numCardOpened[0].dataset.value === numCardOpened[1].dataset.value) {
    messages.innerText = 'Match'
    numCardOpened[0].style.opacity = 0.5
    numCardOpened[1].style.opacity = 0.5
    numCardOpened.length = 0
  } else if (numCardOpened[0].dataset.value != numCardOpened[1].dataset.value) {
    setTimeout(function () {
      numCardOpened[0].children[0].classList.remove('flip')
      numCardOpened[1].children[0].classList.remove('flip')
      numCardOpened.length = 0
    }, 400)
  }
}

const flipCard = (event) => {
  event.target.classList.toggle('flip')
  let clickedCard = event.currentTarget
  numCardOpened.push(clickedCard)
  compare(clickedCard)
}

// const compare = () => {
//   if (numCardOpened[0].innerHTML === numCardOpend[1].innerHTML) {
//     numCardOpened[1].children[0].parentNode.classList.add('open', 'backcolor')
//     numcardOpened[0].children[0].parentNode.classList.add('open', 'backcolor')
//     opened.push(this)
//     numCardOpened.length = 0
//   } else if (numCardOpened[0].innerHTML != numCardOpened[1].innerHTML) {
//     numMistakes.push(this)
//     setTimeout(function () {
//       numCardOpened[0].children[0].classList.remove('open')
//       numCardOpened[0].addEventListener('click', addToArray)
//       numCardOpened[1].addEventListener('click', addToArray)
//       numCardOpened[1].children[0].classList.remove('open')
//       numCardOpend.length = 0
//     }, 400)
//   }
// }

document
  .querySelectorAll('.card')
  .forEach((card) => card.addEventListener('click', flipCard))

//   document.querySelector('.reset').addEventListener('click', resetGame)

// const matchCards = () => {
//   if (firstCardNumber === secondCardNumber) {
//     console.log('Yes')
//   } else if (firstCardNumber != secondCardNumber) {
//     console.log('nope')
//   } else console.log('try again')
// }

// const flipCard = (event) => {
//   event.target.classList.toggle('flip')
//   if (flippedCard < 1) {
//     flippedCard++
//     let clickedCard = event.currentTarget
//     let firstCardNumber = clickedCard.dataset.value
//     // console.log(firstCardNumber)
//   } else if (flippedCard === 1) {
//     let clickedCard = event.currentTarget
//     let secondCardNumber = clickedCard.dataset.value
//     console.log(secondCardNumber)
//   }
//   matchCards(firstCardNumber, secondCardNumber)
// }
