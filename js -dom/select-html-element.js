// getElementByID
// document.getElementById("first_h").innerHTML="its not my comupter"

// getElementByID
// document.getElementsByTagName("h1")[1].innerHTML ="its not my computer."

// getElementByClassName
// document.getElementsByClassName("find")[0].innerHTML ="I am on here now"


var tag_ = document.querySelector("h1")
tag_.innerHTML="This is tag element."

var id_ = document.querySelector("#first_id")
id_.innerHTML ="This tag select by id."
var class_ = document.querySelector(".first_class")
class_.innerHTML ="This Tag Select by class."

document.querySelector("a").innerHTML ="This this home link."
document.querySelector("li a").innerHTML ="This is child link."
document.querySelector(".first_div a").innerHTML ="This is div link"