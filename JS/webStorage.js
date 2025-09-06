// Web Storage API

// Local Storage ... local storage set as a key value data ... it must be string


// setItem(key,value)
localStorage.setItem("UserName","md.sahabuddin shakil")
localStorage.setItem("password","242343")

// getItem(key)

let Username = localStorage.getItem("UserName")
let Password = localStorage.getItem("password")
console.log(Username,Password)

// update 
localStorage.setItem("UserName","ms shakil")

// remove
localStorage.removeItem("password")

// set array in web storage
let countrys =["bangladesh","srilanka","nepal"]
localStorage.setItem("countrys",JSON.stringify(countrys))

let countrysList = JSON.parse(localStorage.getItem("countrys"))
console.log(countrysList)

localStorage.clear()// remove all items



// session Storage   // browser if browser trun off data will removed

let data = {id:"123",name:"ms shakil"}
sessionStorage.setItem("data",JSON.stringify(data))

let dataObject = JSON.parse(sessionStorage.getItem("data"))
console.log(dataObject)

