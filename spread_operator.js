// spread operator js

function add(a,b,c){
    return a+b+c
}
let lst = [1,5,6]
console.log(add(...lst))
// array element push other array
let arr =[3,5,6,7]
let arr2 =[1,2,3,4,...arr]
console.log(arr2)

// object concat with spread operator
let p1 = {
    name:"payer",
    age:23

}
let p2 ={
    district:"comilla",
    nationality:"bangladesh"

}
let p={...p1,...p2}
console.log(p)