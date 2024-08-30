/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


var weight , height , BMI ;

weight = 900;
height = 1.5;
BMI = weight / (height ** 2);

if(BMI < 18.5){
    console.log('Underweight');
}
else if( BMI >= 18.5 && BMI <= 24.5){
    console.log('Normal');
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('Overweight');
}
else if( BMI >29.9){
    console.log('Error');
}
else {
    console.log('you are Obese');
}