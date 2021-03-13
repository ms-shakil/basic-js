var s="javascriptloops"
var arr =name.split('')

for(let i = 0; i< arr.length;i++){
//     if (arr[i]=="a"|| arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="o" ){
        
//     }
// }
arr.unshift("lll")
arr.unshift("kkk")
for(let i = arr.length-1;i>=0;i--){
    console.log(arr[i])
}
let arr =[]
let sarr =[]
for(let i = 0; i< s.length;i++){
    if (s[i]=="a"|| s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u" ){
        sarr.push(s[i])
    }else{
        arr.push(s[i])
    }
}

sarr.sort()
for(let i = 0;i < sarr.length;i++){
    console.log(sarr[i])
}
for(let i =0  ; i <arr.length;i++){
    console.log(arr[i])
}
let s="bhakil"
let cha =s.charAt(i)
let letter ;
switch(cha){
    case "a":
       console.log("A")
       break
    case "b":
       console.log("B")

    case "c":
        letter ="C" 
    case "d":
       letter  ="D"
    case "e":
       letter ="E"
    case "f":
       letter ="F"  
    case "g":
       letter  ="G"
    case "h":
       letter ="H"
    case "i":
       letter ="I" 
    case "j":
       letter  ="J"
    case "k":
       letter ="K"
    case "l":
       letter ="L" 
    case "m":
       letter  ="M"
    case "n":
       letter ="N"
    case "o":
       letter ="O" 
    case "p":
       letter  ="P"
    case "q":
       letter ="Q"
    case "r":
       letter ="R"  
    case "s":
       letter  ="S"
    case "t":
       letter ="T"
    case "u":
       letter ="U" 
    case "v":
       letter  ="V"
    case "w":
       letter ="W"
    case "x":
       letter ="X" 
    case "y":
       letter ="y"
    case "z":
       letter ="Z"                     
}
let nums =[2,3,6,6,5]
let leng = nums.length
for (let i = 0; i< leng;i++ ){
    for (let j = i; j<leng;j++){
        if (nums[i]<nums[j]){
            T = nums[i]
            nums[i] = nums[j]
            nums[j] =T
        }
    }
}

for (let i = 0 ; i<nums.length;i++){
   if(nums[0] > nums[i]){
      console.log(nums[i])
      break
   }
}

let s =345
let L
try{
    let L = s.split("").reverse().join("")
   
}catch(err){
   console.log(err)
   
}finally{
   console.log(L)
}

