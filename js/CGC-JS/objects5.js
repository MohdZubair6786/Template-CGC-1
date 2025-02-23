// var mobile = new Object({
//   brand : "Apple"
// });
// console.log(mobile);

var mobile1= 
{
  storage:"24",
};
var mobile = Object.create(
  mobile1,
  {
    brand:{
      value : " Apple ",
      enumerable : true,
      writable : true
    }
  },
);
Object.defineProperties(mobile1,"model",{
  value : "sma",
  enumerable:true
});
console.log(mobile);