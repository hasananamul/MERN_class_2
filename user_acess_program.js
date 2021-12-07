let userAge = prompt('Enter your age');
if (userAge < 20 ){
    console.log(`Your age is ${userAge}, You are not allow to access this program ! Your age must should be between 20 - 35 years old. `)
}
else if (userAge > 35){
    console.log(`Your age is (${userAge}) more tha 35 ! You are too old ! Not allow to acess this program.`)
}
else{
    console.log(`You don't entered any age !!! Please entered by number.`)
}

let num = 1;
switch(num){
    case 1:
        num = 1;
    default:
        num = 10;
}
console.log(num)