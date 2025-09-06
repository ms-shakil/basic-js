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

async function callAllFunction(){
    let t1 = await task1(dataLoading)
    console.log(t1)
}

callAllFunction()