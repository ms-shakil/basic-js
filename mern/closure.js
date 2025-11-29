

// clouse= Function + ase paser parent scope er variable mone rakte pare


function outer(){
    let count =0
    function inner (){
        count++
        console.log(count)
    }
    return inner
}

let sum = outer() // sum e innder functin assign hyse

sum() // oputput 1
sum() // oputput 2
sum() // oputput 3


// Bank account


let creatBank =( balance) =>{
     return{
        deposit (amount){
            balance += amount c
            
        },
        check(){
            console.log(balance)
        }
     }
}

let account = creatBank(0)
account.deposit(100)
account.check()