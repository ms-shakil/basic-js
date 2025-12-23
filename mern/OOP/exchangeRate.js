

class ExchangeRate {
       apiUrl ="https://api.exchangerate-api.com/v4/latest/"
     async getRate(c1='usd',c2){
          const url = this.apiUrl+c1
          const response = await fetch(url)
          const data = await response.json()
          const rate = data.rates[c2.toUpperCase()]
          return rate

     }
}

(async () => {
  let rate = new ExchangeRate()
  const value = await rate.getRate("usd", "bdt")
  console.log(value)
})()