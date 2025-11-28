



let arr = [4,7,2,7]

let sum = arr.reduce((accumulate,el)=>{
     accumulate += el
    return accumulate
},0) // 0 accumulate er inital value ... 10 dile 10 + other element hoto

console.log(sum)

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
        price:10001
    }
]

let totalPrice =phones.reduce((acc,el)=>{
    acc+= el.price
    return acc
},0)
console.log(totalPrice)


const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

let colours = characters.reduce((acc,el)=>{
     if(acc[el.eye_color]){
        acc[el.eye_color]++;
     }else{
        acc[el.eye_color]=1
     }
     return acc
},{}) // array accumulate


console.log(colours) //output { blue: 2, yellow: 1, brown: 1 }
