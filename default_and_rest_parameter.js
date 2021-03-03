// function default parameter

function defultParameter(text ="This is defult parameter."){
    console.log(`${text}`)
}
defultParameter("js confused language.")

// rest parameter

function restParameter(a,b,...z){
    console.log(`a=${a} b=${b} z=${z}`)
}
restParameter(23,53,53,6,75,75,87)