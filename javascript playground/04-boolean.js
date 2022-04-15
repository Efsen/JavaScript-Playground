//boolean
let isActive = false
isActive = true
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") //TRUE
Boolean("") //FALSE
Boolean("0") //FALSE

//True
const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);
//False
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c7 = Boolean(-0);

/*-------------------------- */

userName = "user"
console.log("User Name:" , Boolean(userName))