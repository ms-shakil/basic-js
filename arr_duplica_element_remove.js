
// duplicate element remove from array
const names =["shakil","main","amran","asif","asif","asif","sajjad","sajjad","sajjad","shakil","main","amran","zilan","shakil","shakil","shakil","shakil","sajjad"]
function remove_dup_element(name){
    for(i =0;i<names.length;i++){
        for(j =i+1;j<names.length;j++){
            if(names[i]==names[j]){
            
                names.splice(j,1)
                j-=1;
            }
        }
    }

}
remove_dup_element(names);
console.log(names)