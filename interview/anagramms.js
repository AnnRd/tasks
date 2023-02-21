// // Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// // Например:

// // let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// // alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// // Из каждой группы анаграмм должно остаться только одно слово, не важно какое.


// function aclean(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].toLowerCase().split('').sort().join('');
//         result.push(sorted);

//     }

//     let setted = new Set(result)
//     let final = Array(...setted)
//     console.log(final);
//     return final;
// }

// aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]);



// function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//       // разбиваем слово на буквы, сортируем и объединяем снова в строку
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     //   console.log(sorted, word);
//     }
  
//     console.log(map);
//     return Array.from(map.values());
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   aclean(arr);


  //Написать функцию, проверяющую является ли пара слов анаграмой
  

function isAnagram(a, b) {
    a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('') ? console.log(true) : console.log(false)
}

isAnagram('friend', 'Finder');


