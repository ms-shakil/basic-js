


// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body:JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then((response)=> response.json())
// .then((json) => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PUT',
//     body:JSON.stringify({
//     title: 'UIU',
//     body: 'cse',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then((response)=> response.json())
// .then((json) => console.log(json))




// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PATCH',
//     body:JSON.stringify({
//     title: 'United Internation University',
   
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then((response)=> response.json())
// .then((json) => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });


// second ways to call fetch

const setRequest = async (url,config)=>{

    const res =  await fetch(url, config)
    const data = await res.json()
    return data

}



const getData =()=>{
    setRequest('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
.then((res)=> console.log(res))

}

getData()