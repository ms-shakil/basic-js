
let car ={
    name:"BMW ",
    model:2020,
    madeIn:"japan",
    color:"red",
    move:()=>{
        console.log("run the cur")
    }
}

for(let key in car){
    if(typeof car[key] == 'function'){
       car[key]()
    }else{
        console.log(car[key])
    }
}