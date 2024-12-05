// // 1st example
// const firstFunction =() =>{
//     // console.log("my first arrow function")
// }
// firstFunction()
// // 2nd example 
// const add = (a,b) =>{
//     return a+b
// }
// // console.log(add(3,5))

// use map and filter inside arrow function
var studentData =[
    {
        id:2323,    
        name:"shakil",
        gpa:2.50,
        district:"comilla"},
    {
        id:3534,
        name:"payer",
        gpa:3.00,
        district:"comilla"
        
    },
    {
        id:354444,
        name:"asif",
        gpa:3.50,
        district:"dhaka"
        
    },
    {
        id:3134,
        name:"fahad",
        gpa:4.00,
        district:"comilla"
        
    }
]

let StudentName =()=>{
    return studentData.filter((x)=>{
        return x.gpa>3.5
    }).map((y)=>{
        return y.name
    })
}
console.log(StudentName())