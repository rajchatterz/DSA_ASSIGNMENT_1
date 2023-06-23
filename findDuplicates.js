let nums = [1,2,3,1]
function duplicates(nums){
    let numset = new Set()
    for(let num of nums){
        if(numset.has(num)){
            return true
        }
        numset.add(num)
    }
    return false
}
let result = duplicates(nums)
console.log("Result: "+result)