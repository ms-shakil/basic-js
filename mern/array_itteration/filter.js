

// Filter   condition upor nirbor kore outptu dei

let array =[1,4,5,6,7,8]

 let newArray = array.filter((element)=>  { // only true value new array te add hobe
    if(element % 2 ==0){
        return element
    }
 }) 
 console.log(newArray) 


let phones =[
    {
        brand:"Apple",
        model:"17 pro max",
        price:100000
    },
        {
        brand:"Samsung",
        model:" s24 ultra",
        price:40000
    },
        {
        brand:"Apple",
        model:"14 pro max",
        price:15000
    },
        {
        brand:"Samsung",
        model:" S21 pro max",
        price:10000
    },
        {
        brand:"Apple",
        model:"13 pro max",
        price:10000
    }
]


let Apple_phone = phones.filter((el)=>{
    if(el.brand =="Apple"){
        return el
    }
})

console.log(Apple_phone)   // only apple filter
                                // [
                                // { brand: 'Apple', model: '17 pro max', price: 100000 },
                                // { brand: 'Apple', model: '14 pro max', price: 15000 },
                                // { brand: 'Apple', model: '13 pro max', price: 10000 }
                                // ]