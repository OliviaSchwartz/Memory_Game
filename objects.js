// //Global Variables Here
const playingCards = document.querySelectorAll('.card')
const resetButton = document.querySelector('.reset')
// const images=
let isGameActive = true
let card = document.querySelectorAll('.card')
let frontOfCard = document.getElementsByClassName('front')
let backOfCard = document.querySelectorAll('.back')
// var showCard = document.querySelectorAll('.front')

function flipCard() {
  this.classList.toggle('flip')
}

card.forEach((card) => card.addEventListener('click', flipCard))

// // function shuffle() {
// //   cards.forEach((card) => {
// //     let ramdomPos = Math.floor(Math.random() * 12)
// //     card.style.order = ramdomPos
// //   })
// // }
// // shuffle()
// //Event Handlers Here
// document
//   .querySelectorAll('.card')
//   .forEach((card) => card.addEventListener('click', flipCard))
