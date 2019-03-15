const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ':'
})

let numberOfCar
let CarID = []
let hour = [7.00,7.30,8.00,8.30,9.00,9.30,10.00,10.30,11.00,11.30,12.00,12.30,1.00,1.30,2.00,2.30,3.00,3.30,4.00,4.30,5.00,5.30,6.00,6.30,7.00]
let choosehour = Math.floor(Math.random()*26)
let choosetime = (Math.floor(Math.random()*6))*30
let arrtime = hour[choosehour]

// Helper functions
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
function ordinalSuffixOf(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

console.log('Press Ctrl + \'C\' to exit at any time')

function askCarID() {
    if (CarID.length >= numberOfCar) {
        console.log(`The car are: ${CarID.join(', ')}`)
        rl.close()
    } else {
        rl.question(`Please enter the ${ordinalSuffixOf(CarID.length + 1)} Car Registration Number: `, (answer) => {

            // Store the name in the in an array
            CarID.push(answer)
            arrtime.push(answer)
            choosetime.push(answer)

            askCarID()
        }
        
        )
    }
}

// Self invoking function starting the prompt
(function askHowManyCar() {
    rl.question('How many car come for service today? ', (answer) => {

        // Store the answer in a variable and parse to a number
        numberOfCar = parseInt(answer)
        if (isNumeric(numberOfCar)) {
            askCarID()
        } else {
            console.log('Your input was not recognized as a number. Please try again.')
            askHowManyCar()
        }
    })
}())