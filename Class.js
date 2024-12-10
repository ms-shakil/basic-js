class StudentInfo{
    constructor(name, age) {
         this.name =name;
         this.age = age
        
    }
    set  setName (name){
        this.name =name
    }
    get Info(){
        return  this.name+ this.age
    }
}
let st = new StudentInfo("Shakil",33)
console.log(st.name)
st.setName ="Sahab uddin Shakil"
console.log(st.Info)