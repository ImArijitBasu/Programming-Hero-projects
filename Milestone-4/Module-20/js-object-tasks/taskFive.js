/*
### Task-5 (Hard)

Loop through an object and print the key-value pairs with their `types`

**Input:**
<br>

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

**Output:**

<br>

    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean

*/

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};


for(let key in myObject){
    console.log(`key : ${key} | type : ${typeof myObject[key]}`);
}