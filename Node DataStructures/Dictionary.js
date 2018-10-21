class Dictionary {
  constructor() {
    this.items = {};
  }
  has(key) {
    return key in this.items;
  }
  add(key,value) {
    this.items[key] = value;
  }
  remove(key) {
    if( this.has(key) ){
      delete this.items[key]
      return true;
    }
    return false;
  }
  getValueByKey(key){
	  return this.items[key];
  }
}

var d = new Dictionary();
d.add(1, "value1")
d.add(2, "value2")
d.add(3, "value3")
console.log(d.has(2));
d.remove(2);
console.log(d.has(2));
console.log(d);
console.log(d.getValueByKey(3));

function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
function push(element) {
	this.dataStore[this.top++] = element;
}
function peek() {
	return this.dataStore[this.top-1];
}
function pop() {
	return this.dataStore[--this.top];
}
function clear() {
	this.top = 0;
}
function length() {
	return this.top;
}

function print(a) {
	console.log(a);
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");