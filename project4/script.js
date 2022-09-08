const computer_choiceDisplay = document.getElementById('computer-choice')
const user_choiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('Result')
const possible_choices = document.querySelectorAll('button')
let userChoice
let computerChoice

possible_choices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    user_choiceDisplay.innerHTML = userChoice
    generateChoice()
    getResult()
}))

function generateChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
        //console.log(randomNumber)
    if (randomNumber == 1)
        computerChoice = 'ROCK'
    if (randomNumber == 2)
        computerChoice = 'scissors'
    if (randomNumber == 3)
        computerChoice = 'paper'

    computer_choiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice)
        result = 'Its a drow!'
    if (computerChoice === 'ROCK' && userChoice === 'paper')
        result = 'You win!'
    if (computerChoice === 'ROCK' && userChoice === 'scissors')
        result = 'You lost!'
    if (computerChoice === 'paper' && userChoice === 'scissors')
        result = 'You win!'
    if (computerChoice === 'paper' && userChoice === 'ROCK')
        result = 'You lost!'
    if (computerChoice === 'scissors' && userChoice === 'Paper')
        result = 'You lost!'
    resultDisplay.innerHTML = result;
}