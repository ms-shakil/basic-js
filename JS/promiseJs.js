// how to create promise , pending , resolve , resected
// console.log("start")
// let Promise1 = new Promise((resolve,resected)=>{
//     ResolvePromise = true

//     if( ResolvePromise){
//         resolve("Complite promise1")
//     }else{
//         resolve("not complited promise 1")
//     }
// })

// let Promise2 =new Promise( ( resolve, resected)=>{
//         setTimeout(()=>{
//             resolve("resolve promise two")
//         },1000)
// })

// // promise call
// Promise1.then(ressolve =>{
//     console.log(ressolve)
// }).catch( res=>{
//     console.log(res)
// })

// // all promise call
// Promise.all([Promise1,Promise2]).then(([res1,res2])=>{
//     console.log(res1, res2)
// })

// // use race         jetha age complite hobe sethai kebol print korbe
// Promise.race([Promise1,Promise2]).then(([res1,res2])=>{
//     console.log(res1, res2)
// })
// console.log("end")



let taskOne =()=>{
    return new Promise((resolve , resected)=>{
        resolve("Resolve task one ")
    })
}
let taskTwo =()=>{
    return new Promise((resolve , resected)=>{
        setTimeout(()=>{
            resolve("Resolve task two ")
        },2000)
    })
}
let taskThree =()=>{
    return new Promise((resolve , resected)=>{
        resolve("Resolve task Three ")
    })
}
let taskFour =()=>{
    return new Promise((resolve , resected)=>{
        resolve("Resolve task Four ")
    })
}


taskOne().then((res)=>{
    console.log(res)
})
.then(taskTwo).then((res)=>{
    console.log(res)
})
.then(taskThree).then((res)=>{
    console.log(res)
})
.then(taskFour).then((res)=>{
    console.log(res)
})