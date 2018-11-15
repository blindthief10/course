let firstAttempt = 'Mohamed';
let secondAttempt = 'Mohamad';
let thirdAttempt = 'Muhammad';
let falseAttempt = 'Muhammod';
let test = 'Mohammad';
let myRegex = /^m(o|u)hamm?(a|e)d$/i;

// console.log(myRegex.test(firstAttempt));

let kostas = 'kostas diakogiannis';
let mohammed = 'mohammed';
let daniel = 'daniel';
let mauro = 'Mauro Cifuentes Navarro';

let nameRegex = /^[a-z\s]{3, 20}$/i;

let telephone1 = '684-5763-992';
let telephone2 = '1234567-921';
let telephone3 = '5555-5678-5432';

let phoneRegex = /^\d{3}\-?\d{4}\-?\d{3}$/i;

let password1 = 'blindthief@10';
let password2 = 'marcelo21';
let password3 = 'ko23';
let greekpassword = 'οκωδικοςμου';
let germanpassword = 'öberall';

let passwordRegex = /^[a-ü]{5,20}$/i;



// exercises telephone

let phone1 = '0049 15770452536';
let phone2 = '015770452536';
let phone3 = '00491577 0452536';

let regexCellphone = /^(0049|0)[\s\-]?\d{4}\s?\d{7}$/i;

console.log(regexCellphone.test(phone1));
console.log(regexCellphone.test(phone2));
console.log(regexCellphone.test(phone3));

let firstMail = 'kostas#diakogianni$23@gmail.com';
let secondMail = '';
let thirdMail = '';

let mailRegex = /^[\w$\.#]{4,50}@[a-z]{4,20}\.(com|org|net)$/i;

// console.log(mailRegex.test(firstMail));
