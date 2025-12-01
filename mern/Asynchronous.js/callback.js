
let  showSum =(result)=>{
    console.log( ` sum is ${result}`)
}
let add =(num1,num2,useCallback)=>{
   let result= num1+num2
   useCallback(result)
}

add(10,20,showSum)
/////

let takeOrder =(coustomer,callback)=>{
    console.log(`Take order ${coustomer}`)
    callback(coustomer)
    
}

let processOrder = (coustomer , callback)=>{
    console.log(`Process order  ${coustomer}`)
    setTimeout(()=>{
       console.log("Cooking complite ")
       console.log("Order processed")
       callback()
    },3000)
}
let  complite_Order = (coustomer)=>{
     console.log(`complite ${coustomer} order.`)
}


takeOrder("coustomer 1",function (coustomer){
    processOrder(coustomer,function(){
        complite_Order(coustomer)
    })
})

