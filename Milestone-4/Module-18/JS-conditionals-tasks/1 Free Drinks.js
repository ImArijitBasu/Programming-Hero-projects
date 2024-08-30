/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

/*
*........................................................................
*/

var Burger = 500;
var Coke = 30;

if (Burger > 500){
    Coke = 0;
    Sum = Burger + Coke;
    console.log('burger + free coke = ' + Sum);
}
else {
    Sum = Burger + Coke;
    console.log('burger + coke =' + Sum);
}