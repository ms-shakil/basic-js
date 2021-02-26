// // var names =["shakil","mainuddin","payer","fahad","sajjad","asif"]
// names.push("jlan")
// names.pop()
// console.log(names)


// // shift unshift mathods

// var names =["shakil","mainuddin","payer","fahad","sajjad","asif"]
// names.unshift("rakib")
// names.shift()
// console.log(names)

// // splice mathods use for adding element and delete element
// var names =["shakil","mainuddin","payer","fahad","sajjad","asif"]
// names.splice(2,0,"hadi","bayazid")
// console.log(names)
// // delete
// names.splice(3,2)
// console.log(names)


// slice mathod . this mathods slice array element and return new array

// var names =["shakil","mainuddin","payer","fahad","sajjad","asif"]
// var newArray = names.slice(2,4) // 2 start index and 4 ending index
// console.log(names)
// console.log(newArray)

//sort  sort mathods sort string not numbers
// var names =["shakil","mainuddin","payer","fahad","sajjad","asif"]
// names.sort()
// console.log(names)

// number sort
var numbers =[23,53,3,64,33,22,11,2]
numbers.sort(function(a,b){
  return a-b;
})
console.log(numbers)