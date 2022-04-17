let email = "efsenkaan@gmail.com"
let firstName = "KAAN"
let lastName = "EFSEN"


//length
console.log( email.length )

//[0]

console.log("Name First Letter:",firstName[0])
console.log("Another Name First Letter:",firstName.charAt(1))

//uppercase & lowercase

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//search and slice

console.log(email.search("@"))
console.log(email.search("qakljfsa")) //false
console.log(email[9])

/*-------------- */

console.log(email.slice(9,19))

let DOMAIN = email.slice(email.search("@") + 1 )
console.log('DOMAIN:', DOMAIN)
/*--------------------------- */

console.log(DOMAIN.slice(0,DOMAIN.indexOf(".")));

//replace

email = email.replace('gmail.com','efsen.com')
console.log(email);

//includes

email.includes('@') // https://prnt.sc/zM9t1UGQAcGx

//startWidth & endWidth 
email.endsWith('@') // https://prnt.sc/aHwK0pQiS6fl
email.startsWith('e') // https://prnt.sc/mR9sxJvu1WwJ

//example

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)

