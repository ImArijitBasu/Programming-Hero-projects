
const person = {
    firstName : "Arijit",
    lastName : "Basu",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
