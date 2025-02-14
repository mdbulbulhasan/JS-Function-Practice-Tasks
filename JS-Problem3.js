function makeAvg(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;  
    }
    let len = numbers.length;
    let avg = sum / len;
    return avg;
}
const numbers = [4, 6, 67, 46];
const result = makeAvg(numbers);
console.log('The result is: ', result);