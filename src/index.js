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
    return expr.split('**********').map(word => getString(word, 10)).join(' ');
}

function getString(word, length) {
  const wordLength = word.length;
  const unit = wordLength > 0 && wordLength % length === 0 ? word : word.padEnd('0', 10);
  return getChars(unit, length).reduce((str, d) => str + MORSE_TABLE[d.replace(/11/gi, '-').replace(/10/gi, '.').replace(/0/gi, '')], '');
}

function getChars(unit, length) {
  const chars = [];
  for (let i = 0; i < unit.length / length; i++) {
    const char = unit.substring(i * length, (i + 1) * length);
    chars.push(char);
  }
  return chars;
}

module.exports = {
    decode
}