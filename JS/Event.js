let name = document.querySelector("input[name]")
let Email = document.querySelector("#email")
let language = document.querySelectorAll("input[name='lang']")


let showData =()=>{
    console.log(name.value)
    console.log(Email.value)
    let Lang = null
    language.forEach((e)=>{
        if(e.checked){
            console.log(e.value)
            Lang = e.value
        }
    })

    let Data ={
        name:name.value,
        Email:Email.value,
        Language:Lang
    }
    console.log(Data)
}