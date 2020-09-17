function add(number, number1){
    const name = "Patrick";
    return number * number;
}
console.log(add(1*2, (1+1)*3));
console.log("name", add.name);
console.log("bind", add.bind());
console.log("apply", add.apply());
console.log("call", add.call());
console.log("arguments", add.arguments);
console.log("length", add.length);
console.log("prototype", add.prototype);