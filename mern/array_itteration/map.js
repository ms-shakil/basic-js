

// map return a  new array ..  main arrar size er some array dei

let array =[1,4,5,6,7,8]

 let newArray = array.map((element)=>  { // even value add hobe baki gula  undefine hobe
    if(element % 2 ==0){
        return element
    }
 }) 
 console.log(newArray) // output [ undefined, 4, undefined, 6, undefined, 8 ]

 let player = ["Jaker ali","shamim","shanto","nurul"]

let lord_player = player.map((el)=>{
    return "lord "+el
})

console.log(lord_player) // output [ 'lord Jaker ali', 'lord shamim', 'lord shanto', 'lord nurul' ]
