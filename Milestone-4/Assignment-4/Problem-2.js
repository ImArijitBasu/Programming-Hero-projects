function sendNotification(email) {
    if(!email.includes("@")){
        return "Invalid Email";
    }
    if(email.split('@').length - 1 > 1){
        return "Invalid Email"
    }
    let username = email.slice(0, email.indexOf('@'));
    let domain_name = email.slice(email.indexOf('@')+1);
    let output = `${username} sent you an email from ${domain_name}`;
    return output;
}



//! testing 

const email1 = "Zihad@gmail.com";
const email2 = "farhan34@yahoo.com";
const email3 = "nadim.naem5@outlook.com";
const email4 = "fahim234.hotmail.com";
const email5 = "sadia8icloud.com";

console.log(sendNotification(email1));
console.log(sendNotification(email2));
console.log(sendNotification(email3));
console.log(sendNotification(email4));
console.log(sendNotification(email5));
