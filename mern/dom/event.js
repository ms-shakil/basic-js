// let btn1 = document.querySelector(".btn1");
//  let btn2 = btn1.nextElementSibling;

// btn1.addEventListener("click", () => {
//   btn1.style.color = "red";
// });

// form

 let formElement = document.getElementById("form");
let name = document.querySelector(".name");
let gmail = document.querySelector(".gmail");

formElement.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(name.value + gmail.value)
})