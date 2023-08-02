let popup = document.getElementById("popup")


function openPopup(){
    popup.classList.add("openpopup")
}
function closePopup(){
    popup.classList.remove("openpopup")
}

const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
hamburger.addEventListener("click", ()=> {
    menu.classList.toggle("hidden")
})

const cardb = document.querySelector(".cardb")
const card = document.querySelector(".card")
card.addEventListener("click", ()=> {
    cardb.classList.toggle("hidden")
})
const cardb1 = document.querySelector(".cardb1")
const card1 = document.querySelector(".card1")
card1.addEventListener("click", ()=> {
    cardb1.classList.toggle("hidden")
})
const cardb2 = document.querySelector(".cardb2")
const card2 = document.querySelector(".card2")
card2.addEventListener("click", ()=> {
    cardb2.classList.toggle("hidden")
})
let close = document.getElementById("close")
const modal =  document.querySelector("#modal")
close.addEventListener("click", () => {
    modal.classList.toggle("hidden")
})

function openModal(){
    modal.classList.remove("hidden")
}
function closeModal(){
    modal.classList.add("hidden")
}

let icon = document.getElementById("icon");

 function openbars(){
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');

}
