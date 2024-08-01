// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
  let resultArray = [];
  let product;
  for(var i = 0; i < nums.length; i++){
    product = 1;
    for(var j = 0; j < nums.length; j++){
       if(i !== j) product *= nums[j];
    }
    resultArray.push(product);
  }
  return resultArray;
};

