let username = prompt("User Name");
let age = prompt("Age:")
let info = document.querySelector("#info")

if (username && age >= "18") {
    info.innerHTML = "Ehliyet Alabilir."
}
else if(!username){
    info.innerHTML = "İsim Giriniz"
}
else if (!(age >= 18)){
    info.innerHTML = "Yas Bilginiz yok veya 18 yasindan kucuksunuz"
} 

