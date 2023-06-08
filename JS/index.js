
let isAlive = false
let hasBlackJack = false
let sum = 0
let cards = []

let gameMessage = document.getElementById('game-message')
let gameSum = document.getElementById('game-sum')
let gameCard = document.getElementById('game-card')

let restart = document.getElementById('restart')
let container = document.getElementById('container')
// const getRandomCard = () => {
//     return 5
// }

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    }
    else if(randomNumber === 1) {
         return 11
    }
    else {
        return randomNumber
    }
}


const startGame = () => {
    // console.log(getRandomCard())
    
    if(sum <= 21) {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
    
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard

        renderGame()
        restart.style.display = 'none'
    }
    else {
        sum = ""
        cards.length = []
        renderGame()
    }
}

const renderGame = () => {
    console.log('start game');
    gameSum.textContent = 'Sum: ' + sum
    gameCard.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++) {
        gameCard.textContent += cards[i] + " "
    }
    
    if(sum <= 20) {
        gameMessage.textContent = 'Do you want to draw a card?'
    }
    else if(sum === 21) {
        gameMessage.textContent = "You've got a Blackjack!"
        isAlive = true
        startGame()
    }
    else {
        gameMessage.textContent = "You're out of the game!"
        isAlive = false
        restart.style.display = 'block'
        // renderGame()
}       
}



const newCard = () => {
    console.log('new card');

    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
