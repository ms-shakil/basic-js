// boject literals
// es 5
function student(a,b){
    return{
        name:a,
        age:b
    }
}
console.log(student("asif ",34))
// boject literals es 6
function data(name,age){
    return{
        name,
        age
    }
}

console.log(data("payer",34))

// crieat function inside object
let message={
    body: function(){
        return "This is inside function"
    }
}
console.log(message.body())
// using consize mathod
let message2={
    body(){
        return "This is inside function using consize mathods"
    }
}
console.log(message2.body())


// using function name
let message3={
    'my function'(){
        return "This is inside function using consize mathods"
    }
}
console.log(message3['my function']())


function Myfun (Name,Age){
    return{
        Name:Name,
        Age,Age
    }
}
let myObj ={
    body(){
        return "Hello js"
    }
}
let myObj2 ={
    'body'(){
        return "Hello js"
    }
}

myObj['body']()