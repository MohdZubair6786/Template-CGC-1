var sentence = "JavaScript is a powerful and popular programming language.";

console.log(sentence.toUpperCase());
console.log(sentence.toLocaleLowerCase());
console.log(sentence.indexOf("popular"));
console.log(sentence.slice(16,24));
console.log(sentence.replace("JavaScript","JS"));
console.log(sentence.includes("language"));

//part-2

var fruits = ["Apple","Banana","Mango","Orange","Grapes"];
fruits.push("Pineapple");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1,0,"Strawberry");
console.log(fruits);

console.log(fruits.indexOf("Mango"));;
console.log(fruits.splice(3,1));;
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());

//part - 3

function Person(nm,ag,gndr,nl){
  this.name = nm;
  this.age = ag;
  this.gender = gndr;
  this.greet = console.log(this);
  function isAdult(age){
    if(age){
      age>18;
    }
  } 
};

var p1 = new Person("mohd",45,"male","mohd");
var p2 = new Person("zubair",23,"male","zubair");
var p3 = new Person("ahmed",22,"male","ahmed");


var car = {
  brand : "BMW",
  model : "2017",
  year  : "2015",
  features :["Air Condition","Sunroof","Bluetooth"],
}
car.features.push("auto");
car.year="2000";
delete car.model;
console.log(car);

//Accessing Nested Objects in an Array
var students =[{
  studentOne:{
    name : "Mohd",
    age  : 23,
    grades : {
      math : 90,
      science : 85
    }
  },},{
  studentTwo:{
    name : "Mohd",
    age  : 23,
    grades : {
      math : 90,
      science : 85
    }
  },
},
];

console.log(students[1].studentTwo.grades.science);

var st1 = students[0].studentOne.grades.math;
st1.math = 20;
console.log(st1);