function odd_even(number){
    let check = '';
    if(number % 2 === 0){
        check = "Even";
    }
    if(number % 2 === 1){
        check = "Odd";
    }
    return check;

}
const number = 55;
const result = odd_even(number);
console.log(result);