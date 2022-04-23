let firstname = prompt("What's your name ?");
let myName = document.querySelector("#myName");
myName.innerHTML = firstname;
function showTime(){
    let date = new Date();
    let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let gun = days[date.getDay()];
    let clock=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();	

    if(clock < 10) {
        clock='0'+clock
    }   
    if(min < 10) {
        min='0'+min
    }   
    if(sec < 10) {
        sec='0'+sec
    }   
    let tdate = `${clock}:${min}:${sec} ${gun}`;

    document.querySelector ("#myClock").innerHTML= tdate;
}
setInterval(showTime,1000);