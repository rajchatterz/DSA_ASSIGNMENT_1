function moveZeroes(nums) {
    let i = 0; 
  
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {
        nums[i] = nums[j]; 
        i++;
      }
    }
  
    
    while (i < nums.length) {
      nums[i] = 0;
      i++;
    }
  
    return nums;
  }
  
  let nums = [0, 1, 0, 3, 12];
  let result = moveZeroes(nums);
  
  console.log("Output:", result);