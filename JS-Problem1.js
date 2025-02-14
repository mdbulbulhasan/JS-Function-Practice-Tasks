function multiplyNumbers(numbers){
    let mult = 1;
    for(const number of numbers){
        mult = mult * number;
    }
    return mult;
}
const numbers = [1, 7, 5 , 9];
const result = multiplyNumbers(numbers);
console.log('The result is: ', result);