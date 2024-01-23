let arr =[4,6,3,6,3,2,7,9,5,10,1,19]
function Sort(arr){
    for(let i =0 ;i<= arr.length;i++){
        for(let j =i;j <=arr.length;j++){
            if(arr[i]> arr[j]){
                let temp = arr[i]
                arr[i]= arr[j]
                arr[j] =temp
            }
        }
    }
    return arr
}
Sort(arr)
console.log(arr)

function Search_fun(arr,find_val){
    let find =0
      for(let i =0;i<arr.length;i++){
        if(arr[i]== find_val){
            find =i+1
            break
        }
      }

    if(find ==0){
        console.log("Not Find")
  
    }else{
        find-=1
        console.log("Find and index are "+find+".")
        
    }
}

Search_fun(arr,1)