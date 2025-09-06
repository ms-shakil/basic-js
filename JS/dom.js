// // all about dom
//  //  getElement by Id, getElement by className, getElement byTagName

// let heading1 = document.getElementById("heading-1")
// let heading2 = document.getElementsByClassName("heading-2")
// let heading3 = document.getElementsByTagName("h1")[2]

// heading1.innerHTML = "hello JavaScript"
// heading2.innerHTML = "hello From Bangladesh"
// heading3 .innerHTML = "Hello From United International University"

// //queryselector()

// let heding4 = document.querySelector("#heading-3").innerHTML="learn javascrpt"

// document.querySelector("ul a").innerHTML = "Click for learn English "

// let message1 =()=>{
//     document.getElementById("message").innerHTML = "you click button one"
// }

// let message2 =()=>{
//     document.getElementById("message").innerHTML = "you click button Two"
// }


// let message3 =()=>{
//    let image1 = document.getElementById("image")
//    image1.src ="image/image1.jpg"
// }

// let message4 =()=>{
//     let image2 = document.getElementById("image")
//    image2.src ="image/image2.jpeg"
// }

// // slider
// let arr =["image/image1.jpg","image/image2.jpeg","image/image3.jpg"]

// let img = document.getElementById("img")
// let count =0
// let Next = ()=>{
//     count ++ ;
//     if (count >= arr.length){
//         count=0
//         img.src = arr[count]
//     }else{
//         img.src = arr[count]
//     }
// }


// let Previous = ()=>{
//     count -- ;
//     if (count <0){
//         count= arr.length -1 
//         img.src = arr[count]
//     }else{
//         img.src = arr[count]
//     }
// }

// // event listenr       click , mouseover, ext

// let EventBtn = document.getElementById("eventBtn")

// EventBtn.addEventListener("mouseover",()=>{
//     alert("now you hover this Button")
// })



// Electric Bill calculation

let totalunit = document.querySelector("input[name=unit]")

let TotalBill  = document.getElementById("total-bill")
let area = document.querySelectorAll("input[name='area']")



let calulate = ()=>{
let AreaName =null
let totalTaka = 0
let unit = totalunit.value
area.forEach((e)=>{
    if(e.checked){
        AreaName = e.value
    }
})
 
if (AreaName=="urban"){
    totalTaka = unit*10
    TotalBill.innerHTML= totalTaka
}else if(AreaName=="roral"){
    totalTaka = unit*7
    TotalBill.innerHTML= totalTaka    
}
}
