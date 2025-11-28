

// every and some true false ekta singal value return kore 

// every

let arr =[6,8,1,3,5,9,]

let isEvenHaveThere = arr.every((e)=>{
    return e %2 ==0 
})
console.log(isEvenHaveThere) // false
                             // false return korse karon sob gula even number nah

let isEven = arr.some((e)=>{
    return e %2 ==0 
})
console.log(isEven) // true
                    // ekta true holei true retun korbe



                   
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

// 1st apple filter kore some diye check korsi je sob brand apple ki na 
console.log( phones.filter((e)=> e.brand =="Apple").every((e)=> e.brand =="Apple")) // ture