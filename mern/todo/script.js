                    // 
                    //     <li class="item"><input type="checkbox"> JavaScript </li>
                    //  

 let inCompliteTask = (inputdata)=>{
       let li = document.createElement("li")
       li.classList.add("item")
       let input = document.createElement("input")
       input.setAttribute("type","checkbox")
       li.append(input,inputdata)
       return li
 }
 

 //  <li class="items"> javascript  <button> Delete</button> </li>
 let compliteTask = (inputdata)=>{
           let li = document.createElement("li")
       li.classList.add("items")
       let input = document.createElement("button")
       input.append("delete")
       li.append(inputdata,input)
       return li
        
 }
                    

let form = document.getElementById("form")
let incompliteTodo = document.querySelector(".incomplitetask ul")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
     let inputText = document.getElementById("input_language").value 
    let new_task = inCompliteTask(inputText)
    incompliteTodo.append(new_task)
    form.reset(); 
   
})
 // incomplite to complite and remove from incomplite
document.querySelector(".incom_ul").addEventListener("change",(e)=>{
         let li = e.target.closest("li")
         let text = li.innerText
         li.remove()  
        let complite_Language = compliteTask(text) 
        document.querySelector(".compliteTask ul").appendChild(complite_Language)
    })

// remove from complite task
document.querySelector(".compliteTask ul").addEventListener("click",(e)=>{
        e.target.parentNode.remove()
    })