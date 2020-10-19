const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let sentence = [];
    exprArr = expr.split('**********');

    for (i = 0; i < exprArr.length; i++) {
        word = getWord(exprArr[i]);
        sentence.push(word.toString());
    }

    return sentence.join(" ");
}

function getWord(digitWord){ // 00101010100000000010001011101000101110100000111111
    let word = lettreDigit = "";
    
    for (let i = 0; i < digitWord.length; i++) {
        if((i+1)%10 === 0 && i !== 0) {
            lettreDigit+=digitWord[i];
            word+=getLettre(lettreDigit);
            lettreDigit = "";
        } else {
            lettreDigit+=digitWord[i];
        }
    }

    return word;
}

function getLettre(lettreDigit){ //0010101010
    let doubleDigit = lettreMorse = "";
    
    for (let i = 0; i < lettreDigit.length; i++) {
        
        if((i+1)%2 === 0 && i !== 0){  // разделили строку на 2
            doubleDigit += lettreDigit[i];
            if(doubleDigit == '10'){
                lettreMorse+='.';
            } else if(doubleDigit == '11'){
                lettreMorse+='-';
            }
            doubleDigit = '';
        } else {
            doubleDigit += lettreDigit[i];
        }
    }

    lettre = MORSE_TABLE[lettreMorse];
    return lettre;
}

module.exports = {
    decode
}