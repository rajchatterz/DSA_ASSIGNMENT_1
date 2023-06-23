function sortedArray(){
    let nums1 = [1,2,3,0,0,0]
    
    let m=3
    let n =3
    let sortedarr=[];
    for(let i =0;i<nums1.length;i++){
        if(nums1[i]!=0){
            sortedarr[i]=nums1[i]
        }
        
    }
    return sortedarr
}

let firstsortedarr = sortedArray()
let nums2 = [2,5,6]
let newArr = firstsortedarr.concat(nums2)
console.log(newArr.sort())