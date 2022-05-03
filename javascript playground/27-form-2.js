

let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit' , formSubmit )


function formSubmit(event) {
    event.preventDefault()
    console.log("İşlem gerçekleşti")
    let scoreInputDom = document.querySelector('#score') 
    console.log(scoreInputDom.value)
    localStorage.setItem('score' , scoreInputDom.value )
}