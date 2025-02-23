// function account(withdrawAomunt,balance){
//   var newBalance = 0;

//   if(withdrawAomunt<=balance && ((withdrawAomunt>0) && (balance>0))){
//     newBalance = balance - withdrawAomunt;
//     console.log(newBalance);
//   }else{
//     console.log("non");
//   }
//   return newBalance;
// }
// account(100,299);

function account(withdrawAomunt,balance){
  var newBalance = 0;
  // withdrawAomunt < newBalance >0;
  if(withdrawAomunt <= 100 && withdrawAomunt > 0){
    newBalance = balance - withdrawAomunt;
    newBalance = (balance - withdrawAomunt);
    console.log(newBalance);
  }else if(withdrawAomunt <= 200){
    newBalance = (balance - 100) - (withdrawAomunt - 100);
    console.log(newBalance);
  }else if(withdrawAomunt <= 500){
    newBalance = (balance - 200) - (withdrawAomunt - 200);
    console.log(newBalance);
  }else if(withdrawAomunt <= 1000){
    newBalance = (balance - 500) - (withdrawAomunt - 500);
    console.log(newBalance);
  }
  else{
    console.log("non");
  }
  return newBalance;
}

account(450,777);
