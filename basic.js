// string
var str ="md.sahabuddin shakil"
console.log("total length of name:"+str.length)

function Myfun(name ,age, district,country){
    result =""
    result = "my name is " +name + ".Im "+age+" years old ."+"my home district is "+district+ "my country name is"+country
    return result
}
console.log(Myfun("Ms-Shakil",22,"Comilla","Bangladesh"))

//fizzbuzz problem
var total =50
for(let i =0;i<=total;i++){
    if(i%5==0 && i%3==0){
       console.log("Fizzbuzz.")
    }else if(i%5==0){
        console.log("Fizz")
    } else if(i%3==0){
        console.log("Buzz")
    }else{
        console.log("out of fizzbuzz")
    }
}


// string 
var mystr = "Hello United International University ."
mystr += "why did you give Bambo on your student !"
console.log(mystr)
  str = "You should love your student"
  mystr += str
  console.log(mystr)
  console.log(mystr.length)
  mystr[0] ="h" // singal char cant change ....if want to change we  change full string
  console.log(mystr)



let Split_string = "hello bangladesh how are you"
 console.log(Split_string.split(" ")) // split return array
