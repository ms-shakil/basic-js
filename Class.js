class StudentInfo{
    // creat class
    constructor(id,name){
        this.id = id,
        this.name =name
    }
    // set function set data . this fun get only one peramiter

    set setdata( id){
        this.id =id
    }
    // this function return cls information
    get info(){
        return this.id +" " +this.name
    }
}



let student = new StudentInfo(23,"shakil")
console.log(student)
console.log(student.id)
console.log(student.name)

student.setdata=343434
console.log(student.id)

console.log(student.info)