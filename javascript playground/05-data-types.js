let price = 111
let stingPrice = "111"
let hasPassword = true

console.log("Price:",typeof(price))
console.log("String Price:",typeof(stingPrice))
console.log("Password:",typeof(hasPassword))


/*-----------------------------------*/

let number1 = "11"
number1 = parseInt(number1)
console.log("number_1:", (number1), typeof(number1))

//---------//

let number2 = "px11px"
number2 = parseInt(number2)
console.log("number_1:", (number2), typeof(number2))

//----------//

let number3 = "52.1"
number3 = Number(number3)
console.log("number_1:", (number3), typeof(number3))

//----------//

let number4 = "11.4px"
number4 = parseFloat(number4)
console.log("number_1:", parseFloat(number4), typeof(number4))

//String

let number5 = 454

number5 = number5.toString()
console.log(number5 , typeof(number5))