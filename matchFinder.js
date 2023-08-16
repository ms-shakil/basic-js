function matchFinder(str1,str2){
    let returnValue =false
    let num =0
    if(typeof str1 != 'string' || typeof str2 != 'string'){
        console.log("Please Enter valid input.")
        return
    }
    for(let i=0;i<str1.length;i++){
        if(str1[i]==str2[num]){
              num++
        }else if(num==str2.length){
            returnValue = true
            break
        }else{
            num=0
        }
    }
    return returnValue
    
}

var str1 ="united internation university"
var str2 ="tion"
console.log(matchFinder(str1,2))