
for (var i = 0 ; i < 4;i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        text = this.innerHTML 
        console.log(text)
        autoPlay(text)
        Animition(text)
    })
}
function autoPlay(text){
    switch(text){
        case "a":
            var audio = new Audio("mp3/audio1.mp3")
            audio.play()
            break
        
        case "b":
           var audio = new Audio("mp3/audio2.mp3")
            audio.play()
            break        
        case "c":
            var audio = new Audio("mp3/audio4.mp3")
            audio.play()
            break        
        case "d":
            var audio = new Audio("mp3/audio4.mp3")
            audio.play()
            break        
    }

}

function Animition(text){
    var aaaaa= document.querySelector("."+text)
    aaaaa.classList.add("ani")
    setTimeout(function(){
        aaaaa.classList.remove("ani")
    },1000)

} 

// key press 
document.addEventListener("keypress",function(even){
    var text = even.key
    autoPlay(text)
    Animition(text)
})

//
// var Mydiv = document.querySelector(".mydiv")
// document.addEventListener("keypress",function(even){
//     text = even.key
//     Mydiv.innerHTML= "you have pressed "+text

// })

//
var  Textarea = document.querySelector(".textarea_")
count =0
document.addEventListener("keypress",function(even){
    count++
    text = even.key
    Textarea.innerHTML = "you are pressed" + count

})