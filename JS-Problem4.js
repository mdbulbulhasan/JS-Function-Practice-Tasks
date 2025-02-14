function count_zero(binaryString){
    let zerosCount = 0;
    console.log(binaryString);
    for(const bit of binaryString){
        if (bit === '0'){
            zerosCount++;
        }           
    }
    return zerosCount;
}
const binaryString = '10011001';
const result = count_zero(binaryString);
console.log(result);