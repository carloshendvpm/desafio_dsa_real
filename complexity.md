# [Top K Frequent](https://leetcode.com/problems/top-k-frequent-elements/description/)
## Complexidade de Tempo e Espaço

## Complexidade de Tempo

- Percorrendo o array de `nums`: `O(n)`
- Adicionando no map: `O(1)`
- Criando um array de `entries` a partir do map: `O(n)`
- Ordenando o array de `entries`: `O(n log n)` - [TimSort](https://www.geeksforgeeks.org/timsort/)
  - Desde a versão 7.0 da V8 e do Chrome 70, o algoritmo de ordenação é o TimSort, previamente era o QuickSort.
- `slice` do array ordenado: `O(n)` - [Documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

**Complexidade de Tempo Total**: `O(n log n)`

## Complexidade de Espaço

- `map`: `O(n)`
- `entries`: `O(n)` - Por armazenar todos os elementos do `map`, que tem `n` elementos.
- `res`: `O(n)` - Por armazenar todos os elementos dos `entries`.

**Complexidade de Espaço Total**: `O(n)`
"""

# [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)

## Complexidade de Tempo e Espaço

## Complexidade de Tempo

- Percorrendo o array de `strs`: `O(n)`
- Ordenando a string: `O(n log n)` - [TimSort](https://www.geeksforgeeks.org/timsort/)
- Adicionando no map: `O(1)`

**Complexidade de Tempo Total**: `O(n log n)`

## Complexidade de Espaço

- Agrupamento dos anagramas no `map`: `O(n)`

**Complexidade de Espaço Total**: `O(n)`
"""




