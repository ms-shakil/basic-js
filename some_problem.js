// random number print 1 to 6 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

console.log(getRndInteger(1,6))

// sort by alpa
const students=["samit","rohti","akib","morsalin","jilan"]
console.log(students.sort())

// 
const roll =[4,3,1,7,8,6,2,5,9]
console.log(roll.sort())



/// leap year

function isLeapYear(year){
    if(year % 400 == 0 || year % 4 == 0 && year %100 != 0){
       console.log("this year is Leap year")
    }else{
        console.log("this year is not leap year")
    }
}

isLeapYear(2028)


// find vowel in sentence

const vowel = ["a","e","i","o","u","A","E","I","O","U"]





function countVowel(sentence){
    let count =0
    const letters = Array.from(sentence)
    letters.forEach(function(value){
        if(vowel.includes(value)){
            count++
        }
    })

    return count
}
console.log(countVowel("Bangladesh is a beautyfull country. that why i love bangladesh"))


// unique valo find

const number =[1,5,3,7,8,3,2,1,9,3,5,6]

const uniqueArr = number.filter(function(value,index,array){
    return array.indexOf(value ) === index
})

console.log(uniqueArr)