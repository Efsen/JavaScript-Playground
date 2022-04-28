let greeting = document.querySelector("#functioninfo2")
greeting.addEventListener("click",function(){
    console.log("Tiklandıı")
})

/* -----------------------------------------------*/
let greeting2 = document.querySelector("#functioninfo2")
greeting2.addEventListener("click" , domClick)

function domClick(){
    console.log(this.innerHTML = "CHANGE")
    this.style.color == "red" ? this.style.color =  "black" : this.style.color =  "red"  
}

/*------------------------------------------------ */

let greeting3 = document.querySelector("#functioninfo3")
greeting3.addEventListener("mouseover" , domClick)

function domClick(){
    console.log(this.innerHTML = "CHANGE")
    this.style.color == "red" ? this.style.color =  "black" : this.style.color =  "red"  
}

let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', function(event) {
    output.innerText = event.target.value.split('').join('');
});

/*--------------------------------------------- */
let yellowball = document.getElementById("yellow");
let purpleBall = document.getElementById("purple");

yellowball.onclick = function() {
purpleBall.style.backgroundColor = "yellow";
}
