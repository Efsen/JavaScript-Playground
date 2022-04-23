let username = prompt("User Name")

let info = document.querySelector("#info")

//info.innerHTML = `${username.length > 0 ? username : "Kullanıcı bilginiz bulunmamaktadır."}` 

let money = prompt("Cost:")

let cost = document.querySelector("#money")
cost.innerHTML = `${(money < 50) ? money :"Satın Alamazsınız"}  ${(money > 50 )? money:"Satın Alabilirsiniz"}`

/*if(money < 50 ){
    cost.innerHTML = `${money} : "Satın Alamazsınız"`
}else{
    cost.innerHTML = `${money} : "Satın Alabilirsiniz"`
}*/

