/**
  * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
  * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
  * Сложность задачи: 3 of 5
  * 
*/
const flatten = (arr) => {
  let result = [];

for (let i = 0; i < arr.length; i++) {
  if (!Array.isArray(arr[i])) {
      result.push(arr[i])

  } else {
        result = result.concat(flatten(arr[i]))
    }
  }
  return result;
}

 const data = [1, 2, [3, 4, [5]]];
  const secondData = [[1, 2, [3, 4, [5, 5]]], [4, 5], [6]];
 console.log(flatten(secondData)); // [1, 2, 3, 4, 5]

