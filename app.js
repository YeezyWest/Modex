const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const signUp = document.querySelectorAll(".sign");
const learnMore = document.querySelectorAll(".learn");
const discount = document.querySelectorAll(".discount");

hamburger.addEventListener("click", ()=> {
    menu.classList.toggle("hidden")
})

signUp.forEach( (sign)=> {
  sign.addEventListener("click", ()=> {
    alert("Still working on the signup form...");
  })
})

learnMore.forEach( (learn)=> {
  learn.addEventListener("click", ()=> {
    alert("Still working on the learn form...");
  });
});

discount.addEventListener("click", ()=> {
  
});