// let number =30

// for (let j=0; j<= number;j++){
//     if(j%5==0 && j%3==0){
//         console.log("FIZZBUZZ")
//     }
//     else if(j%5==0){
//         console.log("FIZZ")
//     }
//     else if(j%3==0){
//         console.log("BUZZ")
//     }
//     else{
//         console.log("NOT-FIZZBZZ")
//     }
// }


// console.log(" usin For loop and array ")
// let myArray =["UIU","DIU","NSU","IU"]
// myArray.push("AIUB")
// myArray.pop(0)
// for(let i =0;i<myArray.length;i++){
//     console.log(myArray[i])
// }


// let MyObj ={Name:"Shakil",
//            Id:"011213039",
//            Department:"CSE",
//            University:"UIU"
// }
// // MyObj["Location"]="NotunBazar"
// // console.log(Object.keys(MyObj))
// // console.log(Object.values(MyObj))
// let arr =[3,6,7,8]

// for(let x in arr){
//     console.log(x) // print array elements
// }
// for (let key in MyObj){
//     console.log(key +":"+ MyObj[key])
// }





// For each Function



let data =[3,5,6,8,9,0,5]

// data.forEach((x)=>{
//     console.log(x)

// })
// data.forEach((x,index,arr)=>{
//     x+=10
//     arr[index]= x
    
// })
// console.log(data)




// // Map  for each er moto kaj kore but se alada ekta Array return kore

// let new_data = data.map((x)=>{
//     return  x*x
// })
// console.log(new_data)


// // Filter  map er moto kaj kore kintu se conditon er upor new array dei

// let FilterData = data.filter((x)=>{
//     return x>5
// })

// console.log(FilterData)



let students =[{
    name:"mahee",
    cgpa:3.3
},{
    name:"atib",
    cgpa:3.5
},{
    name:"akib",
    cgpa:3.1
},{
    name:"kew na",
    cgpa:3.6
}]

// arraw Function

function MyFun(x){
    return x+5
}
console.log(MyFun(10))

let MyArrow =(x)=>{
    return x+6
}
console.log(MyArrow(10))


let studentName = ()=>{
    return students.filter((x)=>{
        return x.cgpa >= 3.5
    }).map((y)=>{
        return  y.name
    })
}

console.log(studentName())
