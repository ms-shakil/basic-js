function Fun( n){
    if(n==1){
        return 1;
    }
    return n*Fun(n-1);
}

console.log(Fun(5));
//
function Arry_sum(arr,n){
     if(n==-1){
        return 0
     }
     return arr[n]+Arry_sum(arr,n-1)

}

const arr=[10,10,10,10,10,10,11]
console.log(Arry_sum(arr,6))

