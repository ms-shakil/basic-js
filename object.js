// first object
var obj ={
  name:"payer",
  age:19,
  district:"comilla",
  country:"Bangladesh"
}
obj.name = "Sahabuddin Shakil"
console.log(obj.name)
console.log(obj)


// make constructor 

function Engineer (name,age,position,company){
    this.name = name;
    this.age = age;
    this.position = position;
    this.company = company;
}

var names =new Engineer("shakil",19,"programer","Null");
var names1 = new Engineer("main",25,"software engineer","handy mama")
console.log(names,names1);
