// //how to create promise 
console.log("wellcome")
const promise1 = new Promise((resolve,resect) =>{

    let complitedPromise = true
    if(complitedPromise){
        resolve("complited prmise")
    }else{
        resect("promise not complited")
    }

})



promise1.then((res) =>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

const promise2 = new Promise((resolve,resect)=>{
    resolve("Complited promise2")
})
promise2.then((res)=>{
    console.log(res)
})


Promise.all([promise1,promise2])  // call all promise 
.then(res=>{
    console.log(res)
})
console.log("end")
//



/*
promise
 how to create promise
  promise 3 part- pending, resolve , reject
   // promise pending when create promise
   // resolve when  promise work
   // resject when promise dose't work

*/

let tast1 =()=>{
    return new Promise((resolve, reject)=>{
        resolve("This is Task one")
    })
}
let tast2 =()=>{
    return new Promise((resolve, reject)=>{
        resolve("This is Task 2")
    })
}
let tast3 =()=>{
    return new Promise((resolve, reject)=>{
        resolve("This is Task 3")
    })
}
let tast4 =()=>{
    return new Promise((resolve, reject)=>{
        resolve("This is Task 4")
    })
}

tast1().then((res)=>{
    console.log(res)
}).then(tast2).then((res)=>{
    console.log(res)
})