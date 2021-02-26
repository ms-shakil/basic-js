var value =document.querySelector(".my_div")
var child_value = document.querySelector(".hello_")
// creat html element 
var data = document.createElement("h1")
var text = document.createTextNode("Hi payer khan")
data.appendChild(text)

// add element
value.appendChild(data)

// delet element
value.removeChild(child_value)

// add element after or before element
var data1 = document.createElement("h1")
var text1 = document.createTextNode("HI asif bhai")
data1.appendChild(text1)
var find_element = document.getElementsByTagName("h1")[1]
value.insertBefore(text1,find_element)