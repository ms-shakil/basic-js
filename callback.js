const squre =(num)=>{
    return  num*num
}
// higher order function take function as a parameters
const HigherOrderFunction =(num, callbackf)=>{
    console.log(callbackf(num))
 // A function when argument of higher order function that is callback function

}
HigherOrderFunction(4,squre)


const task1 =(callback)=>{
    console.log("task1")
    callback()
}
const dataLoading =()=>{
    console.log("Data is loading")
}
const task2 =(callback)=>{
        console.log("task2")
        callback()
}
const task3 =()=>{
    console.log("task3")
   
}
const task4 =()=>{
    console.log("task4")
}
task1(function f2(){
       task2(()=>{
        task3()
       })
})
