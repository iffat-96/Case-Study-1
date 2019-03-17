const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

let numberOfCar
let hour = [0700,0730,0800,0830,0900,0930,1000,1030,1100,1130,1200,1230,1300,1330,1400,1430,1500,1530,1600,1630,1700,1730,1800,1830,1900]
let CarID=[]
let timeArrived=[]
let Serviceduration=[]
let bay=[5]

console.log(`\n\n-----Welcome to Najm Car Line Up System------\n\n`)
  console.log('***Press Ctrl + \'C\' to exit at any time***\n\n')

  askHowManyCar()

  function askHowManyCar(){
    readline.question(`How many car for today? : `, (no_car) => {
        numberOfCar = parseInt(no_car)
        if (isNumeric(no_car)) {
            askCarID()
        } else {
            console.log('Your input was not recognized as a number. Please try again.')
            askHowManyCar()
        }
      })

  }

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function askCarID() {
    if (CarID.length >= numberOfCar) {
        console.log(`\n\nList of car that will coming today :\n`)
        for(i=0;i<CarID.length;i++){
            console.log(`\nThe car ID: ${CarID[i]} `)
            console.log(`The car will arrived : ${timeArrived[i]} `)
            console.log(`The service duration : ${Serviceduration[i]}\n `)
        }
        sortwhofirst()
    } else {
        readline.question(`Please enter the Car Registration Number: `, (answer) => {

            CarID.push(answer)
            Arrived_Time()
            Service_Duration()
            askCarID()
            
           
        })
        
        
        
    }
}
function Arrived_Time(){
    timeArrived.push(hour[Math.floor(Math.random()*25)])
}
function Service_Duration(){
    Serviceduration.push((Math.floor(Math.random()*6))*30)
    
}
function sortwhofirst(){
    
    let i , j ,min_idx

    for(i=0;i<timeArrived.length-1;i++){
        min_idx = i
        for(j=i+1 ; j <timeArrived.length ; j++){
            if(timeArrived[j]<timeArrived[i]){
                let temp = timeArrived[i] 
                timeArrived[i] = timeArrived[j]
                timeArrived[j] = temp 

                let tempcarid = CarID[i]
                CarID[i]=CarID[j]
                CarID[j] = tempcarid

                let tempduration = Serviceduration[i]
                Serviceduration[i]=Serviceduration[j]
                Serviceduration[j] = tempduration

            } 
            
        }
    }
    console.log(`\nSorted Car List\n`)
    console.log(CarID.length)
    for(i=0;i<CarID.length;i++){
        console.log(`\nCar will Arrive at : ${timeArrived[i]} `)
        console.log(`Car ID: ${CarID[i]} `)
        console.log(`Car Service Duration: ${Serviceduration[i]} `)
    }
    console.log(`\n***** Time Now : 0700 *****\n We start car service now!\n We open at 0700 - 1900 \n We only have 5 bays\n Maximum Service Duration : 2 hours/120 minutes\n First Come, First Serve\n`)
    bays()
}

function bays(){

} 
