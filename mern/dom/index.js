

let heading  = document.querySelector(".heading")
let list  =document.querySelector(".list")

let parent = document.querySelector(".ulparent")

let  newElement = document.createElement("div")
newElement.innerText = "item3"

let  newElement2 = document.createElement("div")
newElement2.innerText = "item4"
parent.append("Helo")
parent.append(newElement) // take text and tag element did not return somting

// append child

parent.appendChild(newElement2) // take only tag element and retun node list
// innderHtml

let newElement3 = document.createElement("div")
 newElement3.innerHTML ="<p> hello inner html </p>" 
parent.append(newElement3)
console.log(list)
console.log(heading.textContent)

console.log(heading.innerText) // bowser e jemn ache temn dekhai


