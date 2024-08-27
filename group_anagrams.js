// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
  let grouppedAnagrams = new Map();
  for(let str of strs){
    let sortedStr = str.split('').sort().join()

    if(grouppedAnagrams.has(sortedStr)){
      grouppedAnagrams.set(sortedStr, [str, ...grouppedAnagrams.get(sortedStr)])
    } else {
      grouppedAnagrams.set(sortedStr, [str])
    }
  }
  return (Array.from(grouppedAnagrams.values()))
};

// ------ Complexidade de tempo ---------
// percorrendo o array de strs O(n)
// ordenando a string O(n log n) -> https://www.geeksforgeeks.org/timsort/
// adicionando no map O(1)
// Complexidade de tempo: O(n log n)

// ------ Complexidade de espaço ---------
// agrupamento dos anagramas map -> O(n)
// Complexidade de espaço: O(n)