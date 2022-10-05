// //Global Variables Here
const playingCards = document.querySelectorAll('.card')
const resetButton = document.querySelector('.reset')
const isGameActive = true
const card = document.querySelectorAll('.card')
const frontOfCard = document.getElementsByClassName('front')
const backOfCard = document.querySelectorAll('.back')
const showCard = document.querySelectorAll('.front').classList
const imgArray = document.querySelectorAll('.card')
const randomArray = ['']

const shuffle = () => {
    card.forEach((card) => {
      let shuffledCards = Math.floor(Math.random() * 16)
      card.style.order = shuffledCards
    })
  }
  shuffle()

const showImage = () => {
  card.forEach((card) => {
    let flipCard = backOfCard[]((card.style.class = '.front.flip'))
  })
}

const shuffle = () => {
  card.forEach((card) => {
    let shuffledCards = Math.floor(Math.random() * 16)
    card.style.order = shuffledCards
  })
}
shuffle()



//Function For ScoreBoard

//Function For Matches

//Function For Locked Board

//Fuction to remove matched cards

//Function to Play Again

//Function For Winning Message

document
  .querySelectorAll('.front')
  .forEach((card) => card.addEventListener('click', showImage))


document.querySelectorAll(.)
