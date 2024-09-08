/*

### Task-3: 
Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

---
*/

function calculateElectronicsBudget(laptop , tablet , mobile){
    let laptopUnit = 35000 ;
    let tabletUnit = 15000 ;
    let mobileUnit = 20000 ;

    let laptopTotal = laptopUnit * laptop;
    let tabletTotal = tabletUnit * tablet;
    let mobileTotal = mobileUnit * mobile;

    return laptopTotal + tabletTotal + mobileTotal;
}

let total = calculateElectronicsBudget(2,3,4);
console.log(`total money required : ${total} tk`);