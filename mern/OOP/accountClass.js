

class bankAccount {
    #blance=0 // encapsulation  --> class er bahre acces kora jabe nah
    constructor(amount){  // this is constraction
        this.#blance = amount

    }
    deposit(amount){
        this.#blance +=amount
    }
    withdrow (amount){
        if(this.#blance < amount){
            console.log("insufficent blance")
            return
        }
        this.#blance -= amount
    }
    showBlance (){
       console.log(` Your blance is ${ this.#blance}`)
    }

}


let account1 = new bankAccount(1000)  // class instanciate

account1.deposit(200) // 200 is argument
account1.withdrow(100)
account1.showBlance()