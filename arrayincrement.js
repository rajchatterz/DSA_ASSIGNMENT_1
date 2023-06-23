function arrayIncrement(){
    let digits = [1,2,3,4,5,6,7,8,9]
    let end = digits.length
    for(let i=0;i<=end;i++){
        if(digits[i]==end){
            digits[i]=digits[i]+1
        }
    }
    return digits;
}
console.log(arrayIncrement())