var arr =["pic1.jpg","pic2.jpg","pic3.jpeg"]
var Img_Tag = document.querySelector(".img_tag")
var count = 0

function right_button(){
  count++
  if (count >= arr.length){
    count = 0
    Img_Tag.src = arr[count]
  }
  else{
    Img_Tag.src = arr[count]
  }
}
function left_button(){
  count--
  if (count<0){
    count = arr.length -1
    Img_Tag.src = arr[count]
    
  }else{
    Img_Tag.src = arr[count]
  }
  
}
