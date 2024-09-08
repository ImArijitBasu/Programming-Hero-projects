var a = isNaN('11');
var b = isNaN('arijit');
var c = isNaN(2-10);


console.log(a); //false
console.log(b); //true
console.log(c); //false


/*
* isNaN = is not a number 
! isNaN() function returns true if the value is not a number, otherwise it returns false.
? here in the a this function converts '11' from string to number ........ thats why it becomes false cause it's really a number 
? in the 2nd one we can see that it's a string.......thats why its true cause it is not a number
? in the 3rd one we can see that it's a number.......thats why its false cause its really a number 
*/