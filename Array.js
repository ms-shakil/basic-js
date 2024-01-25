const fruits = ["Banana", "Orange", "Apple", "Mango"];


fruits.push("Watermelon")
fruits.pop()
fruits.push("Watermelon")
fruits[1]= "orange....."

for(let i =0 ;i< fruits.length;i++){
    console.log(fruits[i])
}


//////// array Iteration

const Number =[42,12,17,88,23,54]

// for eathch
function MyFun(value,index,array){
    console.log(value)
    console.log(index)
    console.log(array)
    console.log("_________")
}
Number.forEach(MyFun)


function Map_Fun(value){ // map return some thing
    return value*2
}
const NewNum =Number.map(Map_Fun)
console.log(NewNum)



function Filter_Fun(value){
    if(value >30){
        return true
    }
    else{
        return false
    }
}

const NewFilterArry = Number.filter(Filter_Fun)
console.log(NewFilterArry)