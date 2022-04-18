//let title = document.getElementsByTagName('h2')//wrong
let title =  document.getElementById('title')
console.log(title) 
console.log(title.innerHTML) 
console.log(title.innerHTML = "Hello There :) General Kenobi") 

//querySelector

let link = document.querySelector("ul>li>a")

console.log(link);
link.innerHTML += "add"
console.log(link.innerHTML)
link.classList.add('btn')

