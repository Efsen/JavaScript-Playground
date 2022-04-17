let username = "kaan"
const DOMAIN = "kaanefsen.com"

let email = username + "@" + DOMAIN
console.log("Hello", username , "Welcome your web site " + DOMAIN)

/*--------------------------------*/

let info = `Hello ${username} Welcome your web site ${DOMAIN} and mail lenghth ${email.length} letter
Short Name: ${username[0]}
debt: $${(15 + 5 * 5)}
Time: ${new Date()}`
console.log(info)
