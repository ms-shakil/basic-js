// XMLHttpRequest
console.clear()
// event -> onload() , onerror()
// property response, responseText, responseType, reponseURL, status, statusText

// function -> open(),send(), setRequestHeader

const makeRequest =(method,URL,data)=>{
    const xhr = new XMLHttpRequest()
    xhr.open(method,URL)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.onload = ()=>{
        let data = xhr.response
        console.log(JSON.parse(data))
    }
    xhr.send(JSON.stringify(data));
}

const getData =()=>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/todos/1')

}

getData()

const postData =()=>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
     title: 'foo',
    body: 'bar',
    userId: 1,
    })
}

postData()

const updateData =()=>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1'),{
    id: 1,
    title: 'Final Exam',
    body: 'rest api',
    userId: 1,
    }
}

updateData()