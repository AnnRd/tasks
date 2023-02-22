// ДОРЕШАТЬ

const mostWordsFound = function(sentences) {
    let splitted = []

    for (let i = 0; i < sentences.length; i++) {
        splitted.push(sentences[i].split(','))
    }
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])