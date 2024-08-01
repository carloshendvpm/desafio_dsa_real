var findMedianSortedArrays = function(nums1, nums2) {
  let sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let sizeSortedArray = sortedArray.length
  if(sizeSortedArray % 2 === 0){
      return((sortedArray[sizeSortedArray/2] + sortedArray[(sizeSortedArray)/2-1])/2)
  } else {
      return sortedArray[Math.floor(sizeSortedArray/2)]
  }
};