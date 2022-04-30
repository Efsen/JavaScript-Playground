
let user = { username: "kaanefsen" , isactive:true }
console.log(user)


localStorage.setItem('userinfo' , JSON.stringify(user) )
let userinfo = localStorage.getItem('userinfo')
userinfo = JSON.parse(userinfo) 

console.log(userinfo)