var topKFrequent = function (nums, k) {
  let map = new Map();

  for(let i = 0; i < nums.length; i++){
    if(map.has(nums[i])){
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  let entries = Array.from(map.entries())
  let res = entries.sort((a, b) => b[1] - a[1]).map((arr) => Number(arr[0]))
  return res.slice(0, k)
};