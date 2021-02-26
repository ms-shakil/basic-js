var guessnumber = 5
var randomnumber = Math.floor(Math.random()*10)+1
if (guessnumber == randomnumber){
  console.log("You win")
}
else{
  console.log("You lost")
}