var getUserChoice = function(userInput) {
    
    userInput = prompt('Rock, paper or scissors')
    userInput.toLowerCase()

    if (userInput === 'rock' || userInput ===  'scissors' || userInput === 'paper' || userInput === 'bomb') {
            return userInput
    }
    else return "You did not select a valid choice"
}
var getComputerChoice = () => {
    
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'rock'
    } 
    else if (randomNumber === 1) {
        return 'paper'
    }
    else return 'scissors'
}

var determineWinner =function(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'The game was a tie'
    }
    else if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                    return 'The computer wins'
                }
                else return 'The user won'
            }
    else if (userChoice === 'paper') {
                if (computerChoice = 'scissors') {
                    return 'The computer wins'
                }
                else return 'The user won'
            }
    else if (userChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    return 'The computer wins'
                }
                else return 'The user won'
            }
    else if (userChoice === 'bomb') {
        return 'YOU SMASHED IT!'
    }
    }

// console.log(determineWinner('rock','paper'))

var playGame = (userChoice,computerChoice) => {
userChoice = getUserChoice()
computerChoice = getComputerChoice()
console.log (`The computer chose ${computerChoice}`)
console.log (`You chose ${userChoice}`)
console.log(determineWinner(userChoice,computerChoice))
}

playGame()
