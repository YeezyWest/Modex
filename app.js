const signUp = document.querySelectorAll(".sign");
const learnMore = document.querySelectorAll(".learn");
const discount = document.querySelectorAll(".discount");

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

discount.forEach( (discount)=> {
  discount.addEventListener("click", ()=> {
    prompt("what your suggestion!")
  });
})