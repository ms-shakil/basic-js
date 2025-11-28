
//  sort()  
// number 1st vlue onu jai solve sort kore
// jodi pura array normal sorting korte hy thaole sort(a,b) use kore return a-b  or return b-a  diye korte hy


let arr =[1,40,5,33,500,4,6,10]

console.log(arr.sort()) // [1, 10,  33, 4,40,  5, 500, 6] emn output dei

// use a b

// negative -> a age bosbe b pore bosbe
// positive  -> b age bosbe a pore bosbe
// 0  ->  a and b same jaigai thakbe
arr.sort((a,b)=>{
    return a-b;
})

console.log(arr) //[1,  4,  5,   6,10, 33, 40, 500 ]