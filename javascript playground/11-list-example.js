

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

/*---------------Just Add--------------------------- */

var list = document.querySelector("ul")
var product = document.querySelector("#data")
var textadd = document.querySelector("#text-add")
var textdelete = document.querySelector("#text-remove")

textadd.addEventListener("click",function(){
    var li = document.createElement("li"); 
    li.textContent=product.value; 
    list.appendChild(li);
                
    // Veri inputu içerisindeki metni siliyoruz.
    product.value = "";
});

/*----------------Together---------------------- */
var list = document.querySelector("#list2")
var product = document.querySelector("#data2")
var textadd = document.querySelector("#text-add2")

textadd.addEventListener("click",function(){
    var li = document.createElement("li"); 
    li.textContent=product.value; 
    list.appendChild(li);
    product.value = "";
});
function myFunction() {
    const list = document.getElementById("list2");
    if (list.hasChildNodes()) {
      list.removeChild(list.lastChild);
    }
}

