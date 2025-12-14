
const  API = "https://jsonplaceholder.typicode.com/users/1"

// fetch(API).then( (response)=>{
//     return  response.json()
// } )
// .then( (data)=>{
//     console.log(data)
// })

fetch(API)
        .then( resoponse => resoponse.json())
        .then(data =>{
            console.log(data.email)
        })