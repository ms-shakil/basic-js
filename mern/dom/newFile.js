const { formElement, btn2 } = require("./event");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  btn2.style.color = "green";
});
