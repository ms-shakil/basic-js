


// const  API = "https://jsonplaceholder.typicode.com/users/1"
// const response = await fetch(API)
// const  data = await response.json()
// console.log(data)

async  function Apicall (){
const  API = "https://jsonplaceholder.typicode.com/users/1"
const response = await fetch(API)
const  data = await response.json()
console.log(data)
}
// Apicall()


// get Email

async  function getEmail (id =1){
     const  API = `https://jsonplaceholder.typicode.com/users/${id}`
     const response = await fetch(API)
     const data = await response.json()
     return data.email

} 

// console.log( await getEmail(1)) // async function call korar smy await use korte hy
async function main() {
  console.log(await getEmail(2));
}

main()