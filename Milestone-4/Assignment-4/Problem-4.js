function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    if (obj.testScore < 0 || obj.testScore > 50) {
        return "invalid";
    }
    if (obj.schoolGrade < 0 || obj.schoolGrade > 30) {
        return "invalid";
    }
    let isFFamilyValue;
    if (obj.isFFamily) {
        isFFamilyValue = 20;
    }
    if (!obj.isFFamily) {
        isFFamilyValue = 0;
    }
    let final = obj.testScore + obj.schoolGrade + isFFamilyValue;
    if (final >= 80) {
        return true;
    }
    return false;
}


const obj1 = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 30,
    isFFamily: true
}
const obj2 = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false
}
const obj3 = "hello";
const obj4 = {
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true
}
console.log(calculateFinalScore(obj1));
console.log(calculateFinalScore(obj2));
console.log(calculateFinalScore(obj3));
console.log(calculateFinalScore(obj4));