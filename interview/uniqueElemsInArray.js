//Оставить уникальные элементы массива 

function unique(arr) {
  /* ваш код */

    let set = new Set()

    for (let i = 0; i < arr.length; i++){
        set.add(arr[i])

    }
    return Array.from(set)
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

unique(strings); // кришна, харе, :-O


//то же самое с map 

// function unique(arr) {
//     /* ваш код */
  
//       let map = new Map()
  
//       for (let i = 0; i < arr.length; i++){
//           map.set(arr[i])
  
//       }
//       return [...map.keys()]
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   unique(strings); // кришна, харе, :-O