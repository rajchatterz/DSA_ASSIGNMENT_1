function removeElement(nums, val) {
    let i = 0; // pointer to the current position
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
        nums[i] = nums[j]; // overwrite the value at position i with the value at position j
        i++; // move the pointer i to the next position
      }
    }
    return i; // return the new length of the array
  }
  
  let nums = [3, 2, 2, 3];
  let val = 3;
  let newLength = removeElement(nums, val);
  
  console.log(`Output: ${newLength}, nums = [${nums.join(', ')}]`);
  