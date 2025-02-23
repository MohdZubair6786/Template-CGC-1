function bill(amount){
  var discount=0;
  var finalamount = 0;
  if(amount<=500 && amount>=0){
    console.log("no discount");
  }else if(amount>500 && amount<=1000){
    finalamount = amount-(amount/100*10);
    console.log(finalamount);
  }else if(amount>1000 && amount<=2000){
    finalamount = amount-(amount/100*20);
    console.log(finalamount);
  }else if(amount>2000){
    finalamount = amount-(amount/100*30);
    console.log(finalamount);
  }else if(amount<0){
    console.log("Enter valid ");
  }else
  return amount;
}
bill(2000);