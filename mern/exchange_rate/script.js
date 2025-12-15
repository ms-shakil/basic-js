
 let exChangeMoney =async ()=>{
    let input = document.getElementById("input").value
    let exchange = document.getElementById("exhange_vlaue").value
    console.log(input + exchange)
    let apiUrl = `https://api.exchangerate-api.com/v4/latest/${exchange}`
    let   response = await axios(apiUrl)
    let changeRate = response.data.rates.BDT
     let totalAmount = input *changeRate
    document.getElementById("result").innerHTML = totalAmount

}

