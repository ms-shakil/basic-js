
for (var i = 0 ; i < 4;i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        text = this.innerHTML 
        console.log(text)
        autoPlay(text)
        
    })
}
function autoPlay(text){
    switch(text){
        case "button one":
            var audio = new Audio("mp3/audio1.mp3")
            audio.play()
            break
        
        case "button two":
           var audio = new Audio("mp3/audio2.mp3")
            audio.play()
            break        
        case "button three":
            var audio = new Audio("mp3/audio4.mp3")
            audio.play()
            break        
        case "button four":
            var audio = new Audio("mp3/audio4.mp3")
            audio.play()
            break        
    }

}