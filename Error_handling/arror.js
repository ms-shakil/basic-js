
var mybutton = document.querySelector(".button_")
mybutton.addEventListener("click", function(){
    
    var num = document.querySelector("#input_a").value ;
      try{
        console.log(num)
        console.log(js)
      }catch(err){
          console.log(err)
          console.log(err.name)
          console.log(err.message)
      }finally{
          console.log("whats up js")
      }
})