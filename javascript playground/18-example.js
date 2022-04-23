let grade =  prompt("What's your grade ?")
let textinfo
if (grade >= 0 && grade <= 100 ){
    info.classList.add("text-primary")
    if(grade >=90){
        textinfo = "AA 😎" 
    }else if (grade >= 85 && grade <= 89 ){
        textinfo = "BA 😉" 
    }else if (grade >= 80 && grade <= 84 ){
        textinfo = "BB 😊" 
    }else if (grade >= 75 && grade <= 79 ){
        textinfo = "CB 🙂" 
    }else if (grade >= 70 && grade <= 74 ){
        textinfo = "CC 😑" 
    }else if (grade >= 65 && grade <= 69 ){
        textinfo = "DC 🤔" 
    }else if (grade >= 60 && grade <= 64 ){
        textinfo = "DD 😓" 
    }else if (grade >= 50 && grade <= 59 ){
        textinfo = "FD 😓" 
    }else if (grade <= 49 ){
        textinfo = "FF 😭" 
        info.classList.remove("text-primary")
        info.classList.add("text-danger")

    }
}else{
    textinfo = "Bilgiler Doğru Değil"
}
let info = document.querySelector("#grade")
info.innerHTML = `${textinfo} -> ${grade}` 

/*if(grade >=90 && grade <= 100 ){
    textinfo = "AA 😎" 
}else if (grade >= 85 && grade <= 89 ){
    textinfo = "BA 😉" 
}else if (grade >= 80 && grade <= 84 ){
    textinfo = "BB 😊" 
}else if (grade >= 75 && grade <= 79 ){
    textinfo = "CB 🙂" 
}else if (grade >= 70 && grade <= 74 ){
    textinfo = "CC 😑" 
}else if (grade >= 65 && grade <= 69 ){
    textinfo = "DC 🤔" 
}else if (grade >= 60 && grade <= 64 ){
    textinfo = "DD 😓" 
}else if (grade >= 50 && grade <= 59 ){
    textinfo = "FD 😓" 
}else if (grade > 0 && grade <= 49 ){
    textinfo = "FF 😭" 
}else if(grade >= 0 && grade > 100){
    textinfo = "Bilgiler Doğru Değil"
}*/

console.log(textinfo)
