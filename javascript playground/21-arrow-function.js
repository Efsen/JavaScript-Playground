function hello(firstname) {
    console.log(`${firstname}`)
}
hello("HELLO JS")

const helloFunc_v1 = (firstname) =>{console.log(`${firstname}`)}
helloFunc_v1("helloFunc_v1")

const helloFunc_v2 = firstname =>console.log(`${firstname}`)
helloFunc_v2("helloFunc_v2")

const helloFunc_v3 = (firstname , lastname) =>console.log(`${firstname} , ${lastname}`)
helloFunc_v3("helloFunc_v3" , "last name")

const helloFunc_v4 = (firstname , lastname) =>{
    let info = `${firstname}${lastname}`
    console.log(info)
    return info
}
helloFunc_v4("helloFunc_v4" , "last name")

/*******************************************************/

// Function declaration
function greet(who) {
    return `Hello, ${who}!`;
  }
  greet("John") // output : Hello, John!
  
  // Function expression
  const greet = function(who) {
    return `Hello, ${who}!`;
  }
   greet("John") // output : Hello, John!
