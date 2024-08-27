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
// ------ Complexidade de tempo ---------
// percorrendo o array de nums O(n)
// adicionando no map O(1)
// criando um array de entries a partir do map O(n)
// ordenando o array de entries O(n log n) -> https://www.geeksforgeeks.org/timsort/
// Desde a versão 7.0 da V8 e do Chrome 70 o algoritmo de ordenação é o TimSort, previamente era o QuickSort.
// slice do array ordenado O(n) -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Complexidade de tempo: O(n log n)



// ------ Complexidade de espaço ---------
// map -> O(n)
// entries vai ser O(n) por armaeznar todos os elementos do map que tem n elementos
// res vai ser O(n) por armazenar todos os elementos do entries
// Complexidade de espaço: O(n)