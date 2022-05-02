

let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit' , formSubmit )


function formSubmit(event) {
    event.preventDefault()
    console.log("İşlem gerçekleşti")
}