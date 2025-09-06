// Synchronous  programming
console.log("test 1")
console.log("test 2")
console.log("test 3")
console.log("test 4")



// // Asynchronous programming

let TaskOne =()=>{
    console.log("Task one ")
}
let dataLoading =()=>{
    console.log("Task two data loading ")
}
let TaskTwo =()=>{
    setTimeout(dataLoading,2000)
}
let TaskTree =()=>{
    console.log("Task Tree ")
}
let TaskFour =()=>{
    console.log("Task Four ")
}


TaskOne()
TaskTwo()
TaskTree()
TaskFour()




////           Callback and higerorder Function

