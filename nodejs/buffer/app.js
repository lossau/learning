var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());

console.log('\n------------------------\n');

// novo no ES6
var buffer = new ArrayBuffer(8);
console.log(buffer);
var view = new Int32Array(buffer);
console.log(view);

view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view);