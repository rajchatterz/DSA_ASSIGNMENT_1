let arr = [2,7,11,15]
let target=13
function findArrayIndice(arr,target){
    let start = 0
    let end = arr.length-1
    while(start<=end){
        if(arr[start]+arr[end]==target){
            console.log([start,end])
        }
        end--
    }
}