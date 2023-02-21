// Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. 
// Но иногда полезно было бы сравнить объекты по содержимому.

// Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых 
// значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.

// Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof. 
// Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение. 
// Не забудьте об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.

// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));        
// // -> true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // -> false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // -> true

// const deepEqual = (a, b) => {
//     if (a === b) {
//       return true;
//     }
//     if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
//       return false;
//     }
//     const aKeys = Object.keys(a);
//     const bKeys = Object.keys(b);
//     if (aKeys.length !== bKeys.length) {
//       return false;
//     }
//     for (let i = 0; i < aKeys.length; i += 1) {
//       const key = aKeys[i];
//       if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) {
//         return false;
//       }
//     }
//     return true;
//   };



// function deepEqual(a, b) {
//     if (a === b) {
//         return true;
//     }
 
//     if (a == null || typeof(a) != "object" ||
//         b == null || typeof(b) != "object")
//     {
//         return false;
//     }
 
//     let propertiesInA = 0, propertiesInB = 0;
//     for (let property in a) {
//         propertiesInA += 1;
//     }
//     for (let property in b) {
//         propertiesInB += 1;
//         if (!(property in a) || !deepEqual(a[property], b[property])) {
//             return false;        
//         }
//     }        
//     return propertiesInA == propertiesInB;
// }


function deepEqual(a, b){
  if (a === b) {
    return true;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object' || aKeys.length !== bKeys.length) {
    return false;
  }

  for (let i = 0; i < aKeys.length; i++) {
    const key = aKeys[i];
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key])){
      return false;
    }
  }
  return true;
}

let obj1 = {here: {is: "an"}, object: [3, 2]};
let obj2 = {here: {is: "an"}, object: [3, 2]}
console.log(deepEqual(obj1, obj2));