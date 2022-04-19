let userName = prompt("What's your name?")
console.log(userName)

let greeting = document.querySelector("#welcome-title")
greeting.innerHTML = `${greeting.innerHTML} ${userName[0].toUpperCase()}${userName.slice(1)}`
console.log(greeting)