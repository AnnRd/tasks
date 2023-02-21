//Проверить правильную последовательность и парность скобок


function validate(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let i = 0; i < s.length; i++) {
        let current = s[i];

        if (isClosingBracket(current)) {
            if (brackets[current] !== stack.pop()) return false;
        } else {
            stack.push(current);
        }
    }

    return stack.length === 0;

}

function isClosingBracket(elem) {
    return [')', '}', ']'].includes(elem);
}

console.log(validate('(){}[]}'));
