function calculateTax(income, expenses) {
    if(income < expenses || income < 0 || expenses <0){
        return "Invalid Input";
    }
    let totalTax = (income - expenses) * 0.20;
    return totalTax;
}



//! testing 

const income1 = 10000;
const expenses1 = 3000;

console.log(calculateTax(income1 , expenses1));
console.log(calculateTax(34000 , 1753));
console.log(calculateTax(5000 , 1500));
console.log(calculateTax(7000 , 7000));
console.log(calculateTax(-5000 , 2000));
console.log(calculateTax(6000 , -1500));