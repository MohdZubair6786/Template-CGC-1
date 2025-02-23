// function cal(a){
//   var result = 0;
//   var value = 0;
//   if(a>200){
//     value = a-200;
//     result = value*8 + 925;
//     console.log(result);
//   }else if(a<=200 && a>=100){
//     value = a-100;
//     result = value*6 + 325;
//     console.log(result);
//   }else if(a<100 && a>=50){
//     value = a-50;
//     result = value*4 + 125;
//     console.log(result);
//   }else if(a<50 && a>0){
//     value = a;
//     result = value*2.5;
//     console.log(result);
//   }else{
//     console.log("enter correct value");
//   }
//   return result;
// };
// cal(250);


function bill(units){
  var billAmount=0;
  if(units<=50 && units>0){
    billAmount = units*2.5;
    console.log(billAmount);
  } 
  else if(units <= 100 && units>0){
    billAmount = (50*2.5) + ((units-50)*4);
    console.log(billAmount);
  }
  else if(units <=200 && units>0){
    billAmount = (50*2.5) + (50*4) + ((units-100)*6);
    console.log(billAmount);
  }
  else if(units >= 200 && units>0){
    billAmount = (50*2.5) + (50*4) + (50*6) + ((units-200) * 8);
    console.log(billAmount);
  }
  else if(units<=0){
    console.log("enter valid unit");
  }
  return billAmount;
}
bill(230);