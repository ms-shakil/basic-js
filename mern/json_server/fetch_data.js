
let apiUrl ="http://localhost:3001/books"

let newData ={
     "titel":"book2",
     "author":"osman"
}
let updateData ={
    
     "titel":"javascipt ",
     "author":"Shorif osman hadi"
     
}
let callApi = async ()=>{
    let response = await fetch(apiUrl)
    let data = await response.json()
    console.log(data)
}
callApi()

async function addData() {
    await fetch(apiUrl,{
    method:"POST",
    body:JSON.stringify(newData)
})
}
// addData()


async function update() {
    let url = `http://localhost:3001/books/${1}`
    await fetch(url,{
    method:"PUT",
    body:JSON.stringify(updateData)
})
}
update()