let firstname = "lorem"
function greetings2() {
    console.log(`Merhaba ${firstname}`)
}

function greetings1(firstname) {
    console.log(`Merhaba ${firstname ? firstname : ""}`)
    console.log(`Merhaba ${firstname}`)
}

function greetings3(firstname = "") {
    console.log(`Merhaba ${firstname ? firstname : ""}`)
}

greetings2()
greetings1()
greetings3("Kaan")

/*------------------------------------------------------ */
function hello(firstname , lastname) {
     let info = `Merhabalar ${firstname} ${lastname}`
     return info
}
let greetingsinfo = hello("Ad","Soyad") 
//let info = "deneme"
//console.log(info)
console.log(greetingsinfo)

/*--------------------------------- */

function functioninfo(id,info){
    let domobject = document.querySelector(`#${id}`)
    domobject.innerHTML = info
}
functioninfo('functioninfo' , hello("Kaan" ,"EFSEN") )

function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Kaan","nodejs");