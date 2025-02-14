function conditionResult(number){
    let result;
    if(number % 2 === 1){
      result =  number * 2;
    }
    if(number % 2 === 0){
        result = number / 2;
    }
    return result;
    
}
const number = 6;
const result = conditionResult(number);
console.log('The result is: ', result);