function cal(a){
  var result = 0;
  var value = 0;
  if(a>200){
    value = a-200;
    result = value*8 + 925;
    console.log(result);
  }else if(a<=200 && a>=100){
    value = a-100;
    result = value*6 + 325;
    console.log(result);
  }else if(a<100 && a>=50){
    value = a-50;
    result = value*4 + 125;
    console.log(result);
  }else if(a<50 && a>0){
    value = a;
    result = value*2.5;
    console.log(result);
  }else{
    console.log("enter correct value");
  }
  return result;
};
cal(201);
