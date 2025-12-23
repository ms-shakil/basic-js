// json object

const person ={
    name:"shakil"
}
person.age = 23
person.district ="comilla"
console.log(person)

// bank account

const Account ={
    Balance:0,
    dePosit: function(newAmount){ // method
        this.Balance += newAmount
    },
    widrow(widBlance){  // another away method
        if(this.Balance < widBlance){
            console.log("invalid input")
            return
        }
       this.Balance -= widBlance
    }
}

Account.dePosit(100)
Account.widrow(50)
console.log(Account.Balance)