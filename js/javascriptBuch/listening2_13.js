const fnContainer = {
    add: function (a, b) {
        return a + b;
    },
    addShortSyntax(a, b) {
        return a + b
    },
    addArrowSyntax: (a, b) => { return a + b; }
}

console.log(fnContainer.add(5, 2));
console.log(fnContainer.addShortSyntax(5, 2));
console.log(fnContainer.addArrowSyntax(5, 2));