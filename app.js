const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const signUp = document.querySelectorAll(".sign");

hamburger.addEventListener("click", ()=> {
    menu.classList.toggle("hidden")
})

signUp.forEach( (sign)=> {
  sign.addEventListener("click", ()=> {
    alert("Still working on the signup form...");
  })
})