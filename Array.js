const fruits = ["Banana", "Orange", "Apple", "Mango"];


fruits.push("Watermelon")
fruits.pop()
fruits.push("Watermelon")
fruits[1]= "orange....."

for(let i =0 ;i< fruits.length;i++){
    console.log(fruits[i])
}


//////// array Iteration

let Number =[42,12,17,88,23,54]

// for eathch
function MyFun(value,index,array){
    console.log(value)
    console.log(index)
    console.log(array)
    console.log("_________")
}
Number.forEach(MyFun)