// ** for each // x is element , index is array index,and list is array
let myArray =[2,4,5,6,7,1,8]
myArray.forEach(function(x,index,list){
    console.log("Array element is ="+x+"for index="+index)
})

// map function return new array
let newArray = myArray.map(function(x){
    return x+2
})

// filter function filter element by condition and return new array
let newArray2 = myArray.filter(function(x){
    return x>5
})

console.log(newArray2)


// Arrow Function

const myFun =(x,y,operation)=>{
       if(operation =="+"){
        return x+y
       }else if(operation =="-"){
        return x-y
       } else if(operation =='*'){
        return x*y
       } else if(operation =="/"){
        return x/y
       }else{
        console.log("Error")
       }

}
console.log(myFun(10,20,"+"))

// one dimentonial array

let Scores =[58,35,32,23,88,58,77,99]

let HigestScores =(array)=>{
        let heightScore=0
        for(let i=0;i<array.length;i++){
              if(array[i]> heightScore){
                     heightScore = array[i]
              }
        }
    return heightScore
}
console.log(HigestScores(Scores))

// two dimensional array

let Result =[["shakil",88],["Sahabuddin",45],["mahee",97],["sajeen",77]]

let HeightResult =(arr)=>{
       let mark =0;
        let index =-1
       for(let i =0;i<arr.length;i++){
              if(arr[i][1]>mark){
                     mark= arr[i][1]
                     index = i
              }
       }
       return mark
}
console.log(HeightResult(Result))


// Create Object and use
let Data ={
       name:"Shakil",
       age: 22,
       Distict:"comilla"
}
Data.cgpa = 3.2
console.log(Object.keys(Data))


function Student  (name,age,cgpa,lang){
        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
        this .lang = lang;
        this.display = function (){
              console.log(this.name);
              console.log(this.age);
              console.log(this.cgpa);
              console.log(this.lang);

        }
}

let Student1 = new Student("Shakil",22,2.3,"english")
let Student2 = new Student("Mahee",22,2.3,"english")
let Student13 = new Student("Sajeen",22,2.3,"english")

Student1.display()