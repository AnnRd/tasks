//сортировка без метода sort()

function sort(arr) {
    if (arr.length <= 1) {
    return arr
}

let startNum = arr[0]
let less = arr.slice(1).filter(num => num <= startNum);
let greater = arr.slice(1).filter(num => num >= startNum)

return sort(less).concat(startNum, sort(greater))


}

sort([15, 9, 7, 10, 30, 25])