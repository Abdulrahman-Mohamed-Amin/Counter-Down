
// start countdown  

let countdown = document.querySelector(".countdown")
let count = document.querySelector(".cont_number")
let count_cont = document.querySelector(".count")
let countNumber = document.querySelector(".count .number")
let replay = document.querySelector(".replay")
let replayBtn = document.querySelector(".replay")



let countInterval2 = setInterval(() => {
countNumber.innerHTML--    
    if(countNumber.innerHTML < 0){
        clearInterval(countInterval2)
        countdown.classList.add("finish")
        countNumber.addEventListener("animationend" , (e) =>{
            console.log(e)
        })
       
    }

}, 1000);

replay.addEventListener("animationend" , (e) =>{
    replay.style.transform = "translate(-50% , -50%) scale(1)"
})
replayBtn.addEventListener("click" , (e) =>{
    window.location.reload()
})