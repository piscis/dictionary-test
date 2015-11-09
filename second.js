import _ from 'lodash';

let msg = "rcbGvb/NwtLKgIC1ysiE0sva28rR0IzW4amQk7ua2JXq3OTlmvTr8p7goNbG06Tv9fLttartAQGuCP8GsgD1DrYFBw26AgERvggUz8TD8RQUCwkiyhQfzQ/PFyAhF9QZFzDYLSnbLywqNSXhMjg+PzIsO/f4+Q==";
let buf = new Buffer(msg, 'base64');
let offset = 86;

let output = [];

for(let i = 0; i<buf.length;i++){
  let chunk = buf[i];

  output.push(String.fromCharCode(((chunk-i)-offset)));
}

console.log('Result:', output.join(''));
