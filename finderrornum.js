function findErrorNums(nums) {
    const numSet = new Set();
    let duplicate;
    let missing;
  
    for (let num of nums) {
      if (numSet.has(num)) {
        duplicate = num;
      }
      numSet.add(num);
    }
  
    for (let i = 1; i <= nums.length; i++) {
      if (!numSet.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }
  
  let nums = [1, 2, 2, 4];
  let result = findErrorNums(nums);
  
  console.log("Output:", result);
  