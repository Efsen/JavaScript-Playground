
    let counter = localStorage.getItem('counter') ? Number = (localStorage.getItem('counter')) : 0
    let counterdom = document.querySelector('#counter')
    let increasedom = document.querySelector('#increase')
    let decreasedom = document.querySelector('#decrease')

    counterdom.innerHTML = counter

    increasedom.addEventListener("click",clickevent )
    decreasedom.addEventListener("click",clickevent )

   /* function clickevent(){
        console.log(this.id)
        if(this.id == "increase"){
            counterdom.innerHTML = counter +=1 
        }
        if(this.id == "decrease" && counter > 0){
            counterdom.innerHTML = counter -=1 
        }
    }*/

    /*function clickevent(){
        console.log(this.id)
        if(this.id == "increase"){
            counterdom.innerHTML = counter +=1 
        }
        else{
            counterdom.innerHTML = counter -=1 
        }
    }*/

    function clickevent(){
        this.id == "increase" ? counter += 1 : counter -= 1 && counter > 0
        localStorage.setItem('counter' , counter)
        counterdom.innerHTML = counter
    }

