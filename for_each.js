//for each
// normal example
let arr = [2,4,6,8,10]
arr.forEach(myarr)
function myarr(x){
    console.log(x)

}
// // creat function inside foreach fun
arr.forEach(function(x){

    console.log(x*x)
})
// 2 example , x is arr element , index is array index , list is main array
arr.forEach(function(x,index,list){
    list[index]=x*x
})
console.log(arr)