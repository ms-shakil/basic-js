// **Find method 
//  Find method find element for a condition

//FindIndex 
//FindIndex methods Return find elements index return

let myArr =[1,5,8,0,15,6]
let value = myArr.find((x)=>{
      if (x%2==0){
        return x
      }
})

let value2 = myArr.findIndex((x)=>{
    if (x%2==0){
      return x
    }
})

let myObj =[
    {
        name:"shakil",
        cgpa:2.25
    },{
        name:"mahee",
        cgpa:3.22
    },{
        name:"Rakib",
        cgpa:3.55
    }
]

let value3 = myObj.findIndex((x)=>{
    if (x.cgpa >3.5){
      return x
    }
})

console.log(value)
console.log(value2)
console.log(myObj[value3])