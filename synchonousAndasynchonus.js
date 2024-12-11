// synchonaus   * synchonaus program run line by line
const task1 =()=>{
    console.log("task1")
}
const dataLoading =()=>{
    console.log("Data is loading")
}
const task2 =()=>{
    setTimeout(dataLoading,2000)  // setTimeout asynchonus fun that take time to run 
}
const task3 =()=>{
    console.log("task3")
}
const task4 =()=>{
    console.log("task4")
}

task1()
task2()
task3()
task4()