function add(number){
    return number * number;
}

const operator = add;
console.log(operator.name);
console.log(operator(2*2));
console.log(add(2*2));