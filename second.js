import _ from 'lodash';

let msg = "l3fKusi/y8p+0NXQ1siehYi714nf2dDS4OLk0uDXlOze2OyZ7ODf8vDy6fDwo+34sqcB+P+r+QIBA7D3+wUHCbYMBv3/DQ8R/w0EwRQIBxoYGhEYGNnOzQIkFSQWFC3VHyrYGtoiKywi3yQiO+M4NOY6NzVAMOw9Q0lKPTdGAg=="
let buf = new Buffer(msg, 'base64');
let offset = 86; // <-- SNEAKY!! makes A apear a in ASCII TABLE

let output = [];

for (let i = 0; i<buf.length;i++) {
  let chunk = buf[i];

  let tmpChar = String.fromCharCode(((chunk-i)-offset));

  if (tmpChar.charCodeAt() > 30000) {
    output.push(String.fromCodePoint((tmpChar.charCodeAt()-(65397-117))));
  } else {
    output.push(String.fromCharCode(((chunk-i)-offset)));
  }
}

console.log('Result:', output.join(''));
