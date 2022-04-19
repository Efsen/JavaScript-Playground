

//example

let lastitem = document.querySelector(".list>li:last-child")
lastitem.innerHTML = "last item change..."
console.log(lastitem)

let firstitem = document.querySelector(".list>li:first-child")
firstitem.innerHTML = "first item change..."
console.log(firstitem)

let listchange = document.querySelector(".list")
let lichange =  document.createElement("li")
let lichange2 =  document.createElement("li")

lichange.innerHTML  = "New Element"
lichange2.innerHTML  = "New Element 2"

listchange.prepend(lichange)//first item

listchange.append(lichange2)//last item


console.log(listchange)
