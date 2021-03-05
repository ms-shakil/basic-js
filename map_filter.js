let arr = [3,6,8,4,34,65,55,33,64]
// map ........map function return new array
let Myarr = arr.map(function(x){
    return x+2
})
// console.log(Myarr)

// filter .... filter function filter array element and return new array

let filter_Array = arr.filter(function(x){
    return x > 10
})
console.log(filter_Array)