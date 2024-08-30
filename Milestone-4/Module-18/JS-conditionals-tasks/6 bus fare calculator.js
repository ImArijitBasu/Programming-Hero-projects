/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

/*
let ticket = 800 ;
let isStudents = true;
let age = 15;
if (age<10){
    console.log("free");
    
}else if (true){
    //50% Discounts
    const discount = ticket*50/100;
    const payamount = ticket - discount;
    console.log(payamount);
}
else if(age>=60){
    //15% discount
    const discount = ticket*15/100;
    const payamount = ticket-discount;
    console.log(payamount);
}
else{
    console.log("Regular ticket fare 800 tk");
    
}
*/
let age = 15;
let regular = 800;
let student = regular - (regular * 50/100);
let senior = regular - (regular * 15/100);

if(age < 10){
    regular = 0;
    console.log('you are a child . your fare is ' + regular);
}
else if(age >= 60){
    console.log('you are a senior citizen . Your fare is : ' + senior);
}
else if(age >= 10 && age < 60){
    console.log('you are a student . Your fare is : ' + student);
}
else{
    console.log('your fare is : ' + regular);
}