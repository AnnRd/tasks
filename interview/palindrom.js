// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


const isPalindrome = function(x) {
    let res = x + '';
     if (res.split('').reverse().join('') === x + '') {
         return true
     }
     return false
 };

//  const isPalindrome = function(x) {
//     reversedStringX = x.toString().split('').reverse().join('')
//         return (reversedStringX === x.toString())
// };


// 

