var value = document.querySelector(".user_name")
var len = document.querySelectorAll(".button_").length

for (var i = 0 ;i < len; i++){
    document.querySelectorAll(".button_")[i].addEventListener("click",function(){
        text = this.innerHTML 
        value.innerHTML = "this is  " + text
    })
}