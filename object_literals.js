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
let message={
    body(){
        return "This is inside function using consize mathods"
    }
}
console.log(message.body())


// using function name
let message={
    'my function'(){
        return "This is inside function using consize mathods"
    }
}
console.log(message['my function']())
