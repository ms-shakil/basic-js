
let squre=(x)=>{
    console.log(`squre of${x}: ${x*x}`)

}


let higherOrderFunction=(num,Callback)=>{  // Je function callback use kore take higer order fun bole
    Callback(num)

}

higherOrderFunction(6,squre)


//call back function

let TaskOne =(callback)=>{
    console.log("Task one ")
    callback()
}

let TaskTwo =(callback)=>{
    setTimeout(()=>{console.log("loading data")
      callback()
    },2000)
    
}
let TaskTree =(callback)=>{
    console.log("Task Tree ")
    TaskFour()
   
}
let TaskFour =()=>{
    console.log("Task Four ")
}


TaskOne(()=>{
  TaskTwo(()=>{
    TaskTree(()=>{
        TaskFour()
    })
  })
})