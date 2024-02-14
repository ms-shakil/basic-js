// //how to create promise 
// console.log("wellcome")
// const promise1 = new Promise((resolve,resect) =>{

//     let complitedPromise = true
//     if(complitedPromise){
//         resolve("complited prmise")
//     }else{
//         resect("promise not complited")
//     }

// })



// promise1.then((res) =>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

// const promise2 = new Promise((resolve,resect)=>{
//     resolve("Complited promise2")
// })
// promise2.then((res)=>{
//     console.log(res)
// })


// // Promise.all([promise1,promise2])  // call all promise 
// // .then(res=>{
// //     console.log(res)
// // })
// console.log("end")


// // rece work for 1st resolve promise
// const promise3 = new Promise((resolve,resect)=>{
//     setTimeout(()=>{
//         resolve("Complited promise3")

//     },2000)
    
// })
// const promise4= new Promise((resolve,resect)=>{
//     setTimeout(()=>{
//         resolve("Complited promise4")

//     },1000)
    
// })

// Promise.race([promise3,promise4])
// .then((res)=>{
//     console.log(res)
// })