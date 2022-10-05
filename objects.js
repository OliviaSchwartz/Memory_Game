// //Global Variables Here
const playingCards = document.querySelectorAll('.card')
const resetButton = document.querySelector('.reset')
const isGameActive = true
const card = document.querySelectorAll('.card')
const frontOfCard = document.getElementsByClassName('front')
const backOfCard = document.querySelectorAll('.back')
const showCard = document.querySelectorAll('.front').classList
const imgArray = document.querySelectorAll('.card')
// let gameWon = null


const shuffle = () => {
  card.forEach((card) => {
    let shuffledCards = Math.floor(Math.random() * 16)
    card.style.order = shuffledCards
  })
}
shuffle()

function flipCard() {
  this.classList.toggle('flip')
}
const gamePlay = () =>
let gameWon= false;













// const showImage = () => {
//   card.forEach((card) => {
//     let flipCard = backOfCard((card.style.class = '.front.flip'))
//   })
// }

//Function For ScoreBoard

//Function For Matches

//Function For Locked Board

//Fuction to remove matched cards

//Function For Winning Message

//Function to Play Again
const playAgain = () => {
  //   isGameActive = true
  shuffle()
}
document
  .querySelectorAll('.front')
  .forEach((card) => card.addEventListener('click', flipCard))

document
  .querySelectorAll('.reset')
  .forEach((reset) => reset.addEventListener('click', playAgain))
